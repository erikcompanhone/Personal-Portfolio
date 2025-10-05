import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

      {/* Mobile / Tablet / Small Desktop (details above form) */}
      <div className="grid grid-cols-1 gap-10 xl:hidden">
        <div>
          <p className="mb-8 text-lg">
            I'm interested in freelance opportunities, especially ambitious or
            large projects. However, if you have other requests or questions,
            don't hesitate to contact me.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
                <MailIcon size={20} />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted">john.doe@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
                <PhoneIcon size={20} />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
                <MapPinIcon size={20} />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted">San Francisco, CA</p>
              </div>
            </div>
          </div>
          {/* Form (below details on small / tablet) */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Subject" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Your message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-accent text-white rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors disabled:opacity-70">
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
            I'm interested in freelance opportunities, especially ambitious or
            large projects. However, if you have other requests or questions,
            don't hesitate to contact me.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name-xl" className="block mb-2 font-medium">Name</label>
              <input id="name-xl" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email-xl" className="block mb-2 font-medium">Email</label>
              <input id="email-xl" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="subject-xl" className="block mb-2 font-medium">Subject</label>
              <input id="subject-xl" name="subject" type="text" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Subject" />
            </div>
            <div>
              <label htmlFor="message-xl" className="block mb-2 font-medium">Message</label>
              <textarea id="message-xl" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Your message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-accent text-white rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors disabled:opacity-70">
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
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted">john.doe@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
              <PhoneIcon size={20} />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent">
              <MapPinIcon size={20} />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
