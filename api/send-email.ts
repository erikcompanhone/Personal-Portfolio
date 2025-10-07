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
  // Build control-char matcher safely to satisfy no-control-regex rule
  // Build pattern without embedding raw control characters (appeases eslint no-control-regex)
  const controlChars = new RegExp(`[${String.raw`\x00-\x1F\x7F`}]`, 'g');
  return message
    .replace(controlChars, '')
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
  interface BodyShape { name?: string; email?: string; subject?: string; message?: string; honeypot?: string }
  let body: BodyShape = {};
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

  const safe = (v: unknown) => (typeof v === 'string' ? v : String(v || '')).trim();
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
    interface SendResult { data: { id?: string } | null; error: { statusCode?: number; status?: number; message?: string } | null }
    const options = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['e.comp2712@gmail.com'] as string[],
      reply_to: _email,
      subject: _subject || 'Portfolio Contact Form',
      text: plain,
      html
    };
    const sendResult = await resend.emails.send(options) as unknown as SendResult; // narrow to minimal shape we consume
    const { data, error } = sendResult || { data: null, error: null };
    if (error) {
      console.error('send-email error', error);
      const status = error.statusCode || error.status || 502;
      return res.status(status).json({ error: 'Email send failed', detail: error.message || 'Unknown error' });
    }
    return res.status(200).json({ ok: true, id: data?.id || null });
  } catch (err) {
    const e = err as Error & { message?: string };
    console.error('send-email unexpected exception', e);
    return res.status(500).json({ error: 'Email send crashed', detail: e.message });
  }
}
