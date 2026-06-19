'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import Modal from './ui/Modal';
import { EASE_OUT, transition } from '../lib/motion';
import { useSiteSettings } from './SiteSettingsProvider';
import Input from './ui/Input';
import { NEU } from './ui/neuTheme';

const INITIAL_FORM_DATA = { name: '', email: '', message: '' };

const STEPS = [
  { id: 1, label: 'Step 01', title: 'Your details' },
  { id: 2, label: 'Step 02', title: 'Your message' },
];

function FormStepIndicator({ step }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-px border border-[var(--color-border)] bg-[var(--color-grid-line)]">
      {STEPS.map(({ id, label, title }) => {
        const active = step === id;
        const complete = step > id;

        return (
          <div
            key={id}
            className={`px-4 py-4 transition sm:px-5 sm:py-5 ${
              active ? 'bg-[var(--color-primary-bg)] text-[var(--color-primary-fg)]' : complete ? 'bg-[var(--color-surface)] text-[var(--color-foreground)]' : 'bg-[var(--color-surface)] text-[var(--color-foreground-subtle)]'
            }`}
          >
            <p
              className={`font-sans text-[10px] font-medium uppercase tracking-[0.24em] ${
                active ? 'text-[var(--color-primary-fg)] opacity-55' : 'text-[var(--color-foreground-subtle)]'
              }`}
            >
              {label}
            </p>
            <p className={`mt-1.5 font-syne text-sm font-bold sm:text-base ${active ? 'text-[var(--color-primary-fg)]' : 'text-[var(--color-foreground)]'}`}>
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function FormSubmitButton({ children, loading, reduceMotion }) {
  return (
    <motion.div
      className="w-full"
      whileHover={reduceMotion || loading ? undefined : { y: -2 }}
      whileTap={reduceMotion || loading ? undefined : { y: 0 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <motion.button
        type="submit"
        disabled={loading}
        className={`${NEU.btnPrimary} w-full justify-center gap-2 px-6 py-3.5 disabled:cursor-not-allowed disabled:opacity-60`}
        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        {children}
        <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
      </motion.button>
    </motion.div>
  );
}

function ContactIntro({ pageHero, contactNote, profileEmail }) {
  const HeadingTag = pageHero ? 'h1' : 'h2';

  return (
    <div className="flex flex-col justify-center">
      <p className={NEU.eyebrow}>Contact</p>
      <HeadingTag className={`${NEU.displayHero} mt-5 text-4xl sm:text-5xl lg:text-[clamp(2rem,4vw,3.5rem)]`}>
        Get in touch
      </HeadingTag>
      <p className="mt-5 max-w-md font-sans text-sm font-medium leading-snug text-[var(--color-foreground-soft)] sm:text-[15px] sm:leading-relaxed">
        {contactNote}
      </p>

      {profileEmail ? (
        <Link
          href={`mailto:${profileEmail}`}
          className="mt-8 inline-flex items-center gap-2 border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-foreground)] transition hover:border-[var(--color-foreground)] hover:bg-[var(--color-primary-bg)] hover:text-[var(--color-primary-fg)]"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden />
          Send email
        </Link>
      ) : null}
    </div>
  );
}

/** `pageHero`: `/contact` uses `h1`. `embedded`: About page section layout. */
export default function Contactform({ pageHero = false, embedded = false }) {
  const { workStatus: WORK_STATUS, profile } = useSiteSettings();
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const contactNote = WORK_STATUS.contactNote || 'I usually reply within a few business days.';

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
        const errorMsg = data?.error || 'Oops! Something went wrong. Please try again.';
        setErrorMessage(errorMsg);
        clearMessage(setErrorMessage);
        console.error('API Error:', data);
      }
    } catch (error) {
      setLoading(false);
      console.error('Network error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
      clearMessage(setErrorMessage);
    }
  };

  const sectionClass = embedded
    ? `border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`
    : `${NEU.contactBg} ${NEU.sectionPad} min-h-[calc(100svh-4rem)]`;

  return (
    <section
      id="contact"
      data-gsap={embedded ? 'about-section' : undefined}
      className={sectionClass}
    >
      <div
        className={`mx-auto max-w-7xl ${
          embedded
            ? 'grid gap-10 lg:grid-cols-2 lg:gap-12'
            : 'grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12'
        }`}
      >
        <div data-gsap={embedded ? 'reveal' : undefined}>
          <ContactIntro
            pageHero={pageHero}
            contactNote={contactNote}
            profileEmail={profile?.email}
          />
        </div>

        <div data-gsap={embedded ? 'reveal' : undefined} className={`overflow-hidden ${NEU.frame}`}>
          <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 sm:px-8">
            <p className={NEU.eyebrow}>Send a message</p>
            <p className="mt-2 font-syne text-lg font-bold text-[var(--color-foreground)] sm:text-xl">
              {step === 1 ? 'Start with the basics' : 'Tell me about your project'}
            </p>
          </div>

          <div className="bg-[var(--color-surface)] px-5 py-6 sm:px-8 sm:py-8">
            <FormStepIndicator step={step} />

            <AnimatePresence mode="wait">
              {step === 1 && (
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
                  className="space-y-6"
                >
                  <Input
                    variant="editorial"
                    label="Your Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                  <Input
                    variant="editorial"
                    label="Email *"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                  <FormSubmitButton loading={loading} reduceMotion={reduceMotion}>
                    Continue
                  </FormSubmitButton>
                </motion.form>
              )}

              {step === 2 && (
                <motion.form
                  key="step-2"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <Input
                    variant="editorial"
                    label="Explain your idea *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  />

                  <div className="flex items-start gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 text-xs leading-relaxed text-[var(--color-foreground-muted)] sm:text-sm">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 border border-[var(--color-border-strong)] bg-transparent accent-white"
                    />
                    <p>
                      I accept the{' '}
                      <a href="#" className={NEU.link}>
                        Terms and Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#" className={NEU.link}>
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <motion.button
                      type="button"
                      onClick={() => setStep(1)}
                      className={`${NEU.btn} w-full justify-center px-6 py-3.5`}
                      whileHover={reduceMotion ? undefined : { y: -1 }}
                      transition={transition(0.22)}
                    >
                      Back
                    </motion.button>
                    <FormSubmitButton loading={loading} reduceMotion={reduceMotion}>
                      {loading ? 'Sending…' : 'Submit'}
                    </FormSubmitButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

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
    </section>
  );
}
