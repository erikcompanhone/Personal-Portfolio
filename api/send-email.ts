import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Simple in-memory rate limit: max 5 emails per IP per hour (resets on server restart)
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const rateMap: Record<string, { count: number; first: number }> = {};

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateMap[ip];
  if (!bucket) {
    rateMap[ip] = { count: 1, first: now };
    return true;
  }
  if (now - bucket.first > RATE_LIMIT_WINDOW_MS) {
    rateMap[ip] = { count: 1, first: now };
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

function sanitize(message: string): string {
  return message
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, 4000); // hard cap
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY on server' });
  }
  let body: any = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }
  const { name, email, subject, message, honeypot } = body || {};

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
  if (!rateLimit(ip)) {
    return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
  }

  if (honeypot) {
    return res.status(200).json({ ok: true }); // silently accept
  }

  const safe = (v: string) => String(v || '').trim();
  const _name = safe(name);
  const _email = safe(email);
  const _subject = safe(subject);
  const _message = sanitize(safe(message));

  if (_name.length < 2 || _subject.length < 2 || _message.length < 15) {
    return res.status(400).json({ error: 'Invalid field lengths' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(_email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const resend = new Resend(resendKey);
    const plain = `Name: ${_name}\nEmail: ${_email}\nIP: ${ip}\n\n${_message}`;
    const html = `<!DOCTYPE html><html><body style="font-family:Arial,Helvetica,sans-serif; line-height:1.5;">\n<h2 style="margin:0 0 12px;">New Portfolio Contact</h2>\n<p><strong>Name:</strong> ${_name}</p>\n<p><strong>Email:</strong> ${_email}</p>\n<p><strong>IP:</strong> ${ip}</p>\n<p style="margin-top:16px; white-space:pre-wrap;">${_message}</p>\n<hr style="margin:24px 0;"/>\n<p style="font-size:12px;color:#666;">Sent via portfolio contact form.</p>\n</body></html>`;

    // Resend API returns { data, error } rather than throwing on logical errors.
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['e.comp2712@gmail.com'],
      reply_to: _email,
      subject: _subject || 'Portfolio Contact Form',
      text: plain,
      html
    } as any); // cast to any to avoid version drift issues

    if (error) {
      // Log full error server-side for debugging during dev
      console.error('send-email error', error);
      const status = (error as any)?.statusCode || (error as any)?.status || 502;
      return res.status(status).json({ error: 'Email send failed', detail: (error as any)?.message || 'Unknown error' });
    }
    return res.status(200).json({ ok: true, id: (data as any)?.id || null });
  } catch (err: any) {
    console.error('send-email unexpected exception', err);
    return res.status(500).json({ error: 'Email send crashed', detail: err?.message });
  }
}
