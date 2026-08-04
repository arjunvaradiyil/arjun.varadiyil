'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import EditorialShell from '../../../components/editorial/EditorialShell';
import LetsBuildSection from '../../../components/editorial/LetsBuildSection';
import Modal from '../../../components/ui/Modal';
import { useSiteSettings } from '../../../components/SiteSettingsProvider';
import { SITE_EMAIL } from '../../../lib/siteSeo';
import { EASE_OUT } from '../../../lib/motion';

const INITIAL_FORM_DATA = { name: '', email: '', message: '' };

function Field({ label, ...props }) {
  const isTextarea = props.rows;
  const Tag = isTextarea ? 'textarea' : 'input';
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </span>
      <Tag
        {...props}
        className="mt-2 w-full border border-black/15 bg-white px-4 py-3 font-mono text-sm text-black outline-none transition focus:border-black"
      />
    </label>
  );
}

export default function ContactPage() {
  const { workStatus: WORK_STATUS, profile } = useSiteSettings();
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const contactNote = WORK_STATUS?.contactNote || 'I usually reply within a few business days.';
  const email = profile?.email || SITE_EMAIL;

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setStep(1);
  }, []);

  const clearMessage = useCallback((setter) => {
    setTimeout(() => setter(''), 5000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setSuccessMessage('Thank you! Your message has been sent successfully.');
        resetForm();
        clearMessage(setSuccessMessage);
      } else {
        setErrorMessage(data?.error || 'Oops! Something went wrong. Please try again.');
        clearMessage(setErrorMessage);
      }
    } catch (error) {
      setLoading(false);
      console.error('Network error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
      clearMessage(setErrorMessage);
    }
  };

  return (
    <EditorialShell showGrid={false}>
      <LetsBuildSection
        as="header"
        email={email}
        formHref="#form"
        animatePath
        headingAs="h1"
        className="pt-8"
      />

      <section id="form" className="scroll-mt-8 px-6 py-20 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-gray-400">
              [ Reach out ]
            </p>
            <p className="mt-6 max-w-sm font-mono text-sm leading-relaxed text-neutral-600">
              {contactNote}
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-8 block font-display text-2xl font-bold tracking-tight transition hover:text-[#ff5e3a] md:text-3xl"
            >
              {email}
            </a>
            <Link
              href="/work"
              className="mt-12 inline-flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-sm uppercase tracking-widest transition hover:border-gray-500 hover:text-gray-500"
            >
              View work <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="border border-black/15 bg-neutral-50">
            <div className="border-b border-black/10 px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                Send a message · Step {step} / 2
              </p>
              <p className="mt-2 font-display text-xl font-bold">
                {step === 1 ? 'Your details' : 'Your message'}
              </p>
            </div>

            <div className="px-6 py-8">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.form
                    key="step-1"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(2);
                    }}
                    className="space-y-5"
                  >
                    <Field
                      label="Your Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                    <Field
                      label="Email *"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff5e3a] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#e54e2f]"
                    >
                      Continue <ArrowUpRight size={14} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.form
                    key="step-2"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <Field
                      label="Explain your idea *"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="rounded-full border-2 border-black px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition hover:bg-black hover:text-white"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5e3a] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#e54e2f] disabled:opacity-60"
                      >
                        {loading ? 'Sending…' : 'Submit'}
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={loading}
        icon="⏳"
        title="Sending your message..."
        closable={false}
        onClose={() => {}}
      />
      <Modal
        isOpen={!!successMessage}
        icon="✅"
        title={successMessage}
        onClose={() => setSuccessMessage('')}
      />
      <Modal
        isOpen={!!errorMessage}
        icon="❌"
        title={errorMessage}
        onClose={() => setErrorMessage('')}
      />
    </EditorialShell>
  );
}
