'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { EASE_OUT } from '../../lib/motion';

const INITIAL_FORM_DATA = { name: '', email: '', message: '' };

function Field({ label, ...props }) {
  const Tag = props.rows ? 'textarea' : 'input';
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</span>
      <Tag
        {...props}
        className="mt-2 w-full border border-black/15 bg-white px-4 py-3 font-mono text-sm text-black outline-none transition focus:border-black"
      />
    </label>
  );
}

/** Two-step contact form in a popup. Posts to /api/contact, same as the /contact page. */
export default function ContactFormModal({ isOpen, onClose }) {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [error, setError] = useState('');

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const close = useCallback(() => {
    onClose();
    // Reset after the exit animation so the panel doesn't flash.
    setTimeout(() => {
      setStep(1);
      setStatus('idle');
      setError('');
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setFormData(INITIAL_FORM_DATA);
        setStatus('sent');
      } else {
        setError(data?.error || 'Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
      setStatus('idle');
    }
  };

  const primaryBtn =
    'inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff5e3a] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#e54e2f] disabled:opacity-60';

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          onClick={status === 'sending' ? undefined : close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Contact form"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 text-black shadow-2xl sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <X size={18} />
            </button>

            {status === 'sent' ? (
              <div className="py-10 text-center">
                <p className="font-display text-2xl font-bold">Message sent.</p>
                <p className="mt-3 font-mono text-sm text-neutral-600">Thanks, I will get back to you soon.</p>
                <button type="button" onClick={close} className={`${primaryBtn} mt-8`}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Send a message · Step {step} / 2
                </p>
                <p className="mt-2 font-display text-2xl font-bold">
                  {step === 1 ? 'Your details' : 'Your message'}
                </p>

                {step === 1 ? (
                  <form
                    className="mt-6 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(2);
                    }}
                  >
                    <Field label="Your Name *" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                    <Field label="Email *" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                    <button type="submit" className={primaryBtn}>
                      Continue <ArrowUpRight size={14} />
                    </button>
                  </form>
                ) : (
                  <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                    <Field label="Explain your idea *" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} required />
                    {error ? <p className="font-mono text-xs text-red-600">{error}</p> : null}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="rounded-full border-2 border-black px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition hover:bg-black hover:text-white"
                      >
                        Back
                      </button>
                      <button type="submit" disabled={status === 'sending'} className={primaryBtn}>
                        {status === 'sending' ? 'Sending…' : 'Submit'}
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
