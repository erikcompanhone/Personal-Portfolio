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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
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
    setSubmitError('');

    if (botField) {
      // silently ignore bot submissions
      return;
    }

    if (!formValid) {
      setSubmitError('Please correct the highlighted fields before sending.');
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Replace this mailto fallback with real backend/API endpoint.
      const mailtoLink = `mailto:e.comp2712@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      // Open user's email client
      window.location.href = mailtoLink;
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Auto-hide success after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setSubmitError('Unable to open email client. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
            {submitSuccess && <div className="p-4 bg-green-500 bg-opacity-20 text-green-400 rounded-md">Your message has been sent successfully!</div>}
            {submitError && <div className="p-4 bg-red-500 bg-opacity-20 text-red-400 rounded-md">{submitError}</div>}
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
            {submitSuccess && <div className="p-4 bg-green-500 bg-opacity-20 text-green-400 rounded-md">Your message has been sent successfully!</div>}
            {submitError && <div className="p-4 bg-red-500 bg-opacity-20 text-red-400 rounded-md">{submitError}</div>}
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
    </div>
  );
};

export default Contact;
