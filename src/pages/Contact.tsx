import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, Copy as CopyIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Toast state
  const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [botField, setBotField] = useState(''); // honeypot

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);
  const isMessageValid = formData.message.trim().length >= 15; // min 15 chars
  const isNameValid = formData.name.trim().length >= 2;
  const isSubjectValid = formData.subject.trim().length >= 2;
  const formValid = isEmailValid && isMessageValid && isNameValid && isSubjectValid && !botField;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<any>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  setToast(null);

    if (botField) {
      // silently ignore bot submissions
      return;
    }

    if (!formValid) {
      setToast({ type: 'error', msg: 'Please correct the highlighted fields before sending.' });
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      honeypot: botField || ''
    };

    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(async r => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) {
          // For client errors (4xx) show toast only; avoid fallback so user can retry/edit.
            if (r.status >= 400 && r.status < 500) {
              setToast({ type: 'error', msg: data.error || 'Send failed. Check inputs or try later.' });
              throw new Error('handled');
            }
            // For server errors (>=500) we will trigger fallback after catch.
            throw new Error(data.error || 'Server error');
        }
        setToast({ type: 'success', msg: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(err => {
        if (err.message === 'handled') return; // already surfaced
        // Fallback to mailto on server error or network failure
        const mailtoLink = `mailto:e.comp2712@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setToast({ type: 'success', msg: 'Opened mail client as fallback.' });
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleCopy = (value: string) => {
    try {
      navigator.clipboard.writeText(value);
    } catch (e) {
      // silent fail; optionally set an error toast later
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

      {/* Mobile / Tablet / Small Desktop (details above form) */}
      <div className="grid grid-cols-1 gap-10 xl:hidden">
        <div>
          <p className="mb-8 text-lg">
            I'm interested in any opportunities to develop new and interesting technologies, especially ambitious or large
            projects. However, if you have other requests or questions, don't hesitate to contact me.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
                <MailIcon size={20} />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="font-medium">Email</h3>
                <p className="text-muted"><a href="mailto:e.comp2712@gmail.com" className="underline decoration-dotted hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-sm">e.comp2712@gmail.com</a></p>
                <button type="button" onClick={() => handleCopy('e.comp2712@gmail.com')} aria-label="Copy email" className="p-2 bg-secondary hover:bg-secondary/80 rounded-md text-muted focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <CopyIcon size={14} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
                <PhoneIcon size={20} />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted">(786) 491-3542</p>
                <button type="button" onClick={() => handleCopy('(786) 491-3542')} aria-label="Copy phone number" className="p-2 bg-secondary hover:bg-secondary/80 rounded-md text-muted focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <CopyIcon size={14} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
                <MapPinIcon size={20} />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted">Miami, FL</p>
              </div>
            </div>
          </div>
          {/* Form (below details on small / tablet) */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden">
              {/* Honeypot field */}
              <label htmlFor="company" className="block mb-2 font-medium">Company</label>
              <input id="company" name="company" value={botField} onChange={e => setBotField(e.target.value)} className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md" placeholder="Do not fill" autoComplete="off" tabIndex={-1} />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} onBlur={handleBlur} required className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${touched.name && !isNameValid ? 'border-red-500' : 'border-secondary'}`} placeholder="Your name" />
              {touched.name && !isNameValid && <p className="mt-1 text-sm text-red-400">Name must be at least 2 characters.</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${touched.email && !isEmailValid ? 'border-red-500' : 'border-secondary'}`} placeholder="your.email@example.com" />
              {touched.email && !isEmailValid && <p className="mt-1 text-sm text-red-400">Enter a valid email address.</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} onBlur={handleBlur} required className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${touched.subject && !isSubjectValid ? 'border-red-500' : 'border-secondary'}`} placeholder="Subject" />
              {touched.subject && !isSubjectValid && <p className="mt-1 text-sm text-red-400">Subject must be at least 2 characters.</p>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} required rows={5} className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none ${touched.message && !isMessageValid ? 'border-red-500' : 'border-secondary'}`} placeholder="Your message (min 15 characters)" />
              {touched.message && !isMessageValid && <p className="mt-1 text-sm text-red-400">Message must be at least 15 characters.</p>}
            </div>
            <button type="submit" disabled={isSubmitting || !formValid} className="px-6 py-3 bg-accent text-white rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors disabled:opacity-70">
              {isSubmitting ? 'Sending...' : <>Send Message <SendIcon size={18} /></>}
            </button>
            {/* Inline blocks removed in favor of global toast */}
          </form>
        </div>
      </div>

      {/* XL Desktop layout: paragraph + form (left), details (right) */}
      <div className="hidden xl:grid xl:grid-cols-2 gap-10">
        <div>
          <p className="mb-8 text-lg">
            I'm interested in any opportunities to develop new and interesting technologies, especially ambitious or large
            projects. However, if you have other requests or questions, don't hesitate to contact me.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden">
              {/* Honeypot field */}
              <label htmlFor="company-xl" className="block mb-2 font-medium">Company</label>
              <input id="company-xl" name="company-xl" value={botField} onChange={e => setBotField(e.target.value)} className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md" placeholder="Do not fill" autoComplete="off" tabIndex={-1} />
            </div>
            <div>
              <label htmlFor="name-xl" className="block mb-2 font-medium">Name</label>
              <input id="name-xl" name="name" type="text" value={formData.name} onChange={handleChange} onBlur={handleBlur} required className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${touched.name && !isNameValid ? 'border-red-500' : 'border-secondary'}`} placeholder="Your name" />
              {touched.name && !isNameValid && <p className="mt-1 text-sm text-red-400">Name must be at least 2 characters.</p>}
            </div>
            <div>
              <label htmlFor="email-xl" className="block mb-2 font-medium">Email</label>
              <input id="email-xl" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${touched.email && !isEmailValid ? 'border-red-500' : 'border-secondary'}`} placeholder="your.email@example.com" />
              {touched.email && !isEmailValid && <p className="mt-1 text-sm text-red-400">Enter a valid email address.</p>}
            </div>
            <div>
              <label htmlFor="subject-xl" className="block mb-2 font-medium">Subject</label>
              <input id="subject-xl" name="subject" type="text" value={formData.subject} onChange={handleChange} onBlur={handleBlur} required className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${touched.subject && !isSubjectValid ? 'border-red-500' : 'border-secondary'}`} placeholder="Subject" />
              {touched.subject && !isSubjectValid && <p className="mt-1 text-sm text-red-400">Subject must be at least 2 characters.</p>}
            </div>
            <div>
              <label htmlFor="message-xl" className="block mb-2 font-medium">Message</label>
              <textarea id="message-xl" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} required rows={5} className={`w-full px-4 py-3 bg-secondary border rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none ${touched.message && !isMessageValid ? 'border-red-500' : 'border-secondary'}`} placeholder="Your message (min 15 characters)" />
              {touched.message && !isMessageValid && <p className="mt-1 text-sm text-red-400">Message must be at least 15 characters.</p>}
            </div>
            <button type="submit" disabled={isSubmitting || !formValid} className="px-6 py-3 bg-accent text-white rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors disabled:opacity-70">
              {isSubmitting ? 'Sending...' : <>Send Message <SendIcon size={18} /></>}
            </button>
            {/* Inline blocks removed in favor of global toast */}
          </form>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
              <MailIcon size={20} />
            </div>
            <div className="flex items-center gap-3">
              <h3 className="font-medium">Email</h3>
              <p className="text-muted"><a href="mailto:e.comp2712@gmail.com" className="underline decoration-dotted hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-sm">e.comp2712@gmail.com</a></p>
              <button type="button" onClick={() => handleCopy('e.comp2712@gmail.com')} aria-label="Copy email" className="p-2 bg-secondary hover:bg-secondary/80 rounded-md text-muted focus:outline-none focus:ring-2 focus:ring-accent/50">
                <CopyIcon size={14} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
              <PhoneIcon size={20} />
            </div>
            <div className="flex items-center gap-3">
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted">(786) 491-3542</p>
              <button type="button" onClick={() => handleCopy('(786) 491-3542')} aria-label="Copy phone number" className="p-2 bg-secondary hover:bg-secondary/80 rounded-md text-muted focus:outline-none focus:ring-2 focus:ring-accent/50">
                <CopyIcon size={14} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
              <MapPinIcon size={20} />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted">Miami, FL</p>
            </div>
          </div>
        </div>
      </div>
      {/* Toast container */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 max-w-sm px-4 py-3 rounded-md shadow-lg border flex items-start gap-3 animate-fade-in-up
            ${toast.type === 'success' ? 'bg-secondary/90 border-accent text-text' : 'bg-secondary/90 border-red-500 text-red-300'}`}
          role="status"
        >
          <div className="flex-1 text-sm leading-snug">{toast.msg}</div>
          <button
            onClick={() => setToast(null)}
            aria-label="Dismiss notification"
            className="text-muted hover:text-text transition-colors"
          >
            ×
          </button>
        </div>
      )}
      <style>{`
        @keyframes fade-in-up { from { opacity:0; transform: translateY(4px);} to { opacity:1; transform: translateY(0);} }
        .animate-fade-in-up { animation: fade-in-up 180ms ease-out; }
      `}</style>
    </div>
  );
};

export default Contact;
