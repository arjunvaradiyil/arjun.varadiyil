'use client';

import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Modal from './ui/Modal';
import { MotionIn } from './ui/Reveal';
import { EASE_OUT } from '../lib/motion';
import { useSiteSettings } from './SiteSettingsProvider';
import Input from './ui/Input';
import { NEU } from './ui/neuTheme';
import WordStaggerReveal from './ui/WordStaggerReveal';

const FORM_HEADLINE = "Let's connect and build something meaningful together.";

const INITIAL_FORM_DATA = { name: '', email: '', message: '' };

/** When false (default), hero is `h2` so pages with their own `h1` stay valid. Use true on `/contact` only. */
export default function Contactform({ pageHero = false }) {
  const { workStatus: WORK_STATUS } = useSiteSettings();
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

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

  const contactHeroClass = 'text-4xl leading-tight sm:text-5xl md:text-7xl lg:text-8xl';
  const contactHeroInner = (
    <>
      <span className={`${NEU.contactHeroMuted} block font-syne font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl`}>
        Hello
      </span>
      <span className={`${NEU.contactHeroDisplay} mt-2 block sm:mt-3 md:text-7xl lg:text-8xl`}>
        <span className={`${NEU.contactSticker} mx-auto inline-block`}>Get in touch</span>
      </span>
    </>
  );

  return (
    <div
      id='contact'
      className={`${NEU.contactBg} relative flex min-h-[calc(100svh-7.25rem)] items-center justify-center overflow-hidden px-5 py-12 sm:px-8 md:min-h-[calc(100svh-4.5rem)] md:px-12 md:py-16`}
    >
      <div className='relative z-10 mx-auto flex w-11/12 max-w-6xl flex-col gap-10 lg:w-9/12 md:flex-row md:gap-12'>
        <MotionIn className='flex w-full flex-col justify-center pr-0 text-center md:w-1/2 md:pr-12 md:text-left' variant='left'>
          <p className={`${NEU.eyebrow} mb-4 flex justify-center md:justify-start`}>
            <span className={NEU.badge}>Contact</span>
          </p>
          {pageHero ? (
            <h1 className={contactHeroClass}>{contactHeroInner}</h1>
          ) : (
            <h2 className={contactHeroClass}>{contactHeroInner}</h2>
          )}
          {pageHero ? (
            <p className={`mx-auto mt-6 max-w-md text-center text-sm leading-relaxed md:mx-0 md:text-left ${NEU.bodyText}`}>
              {WORK_STATUS.contactNote}
            </p>
          ) : null}
        </MotionIn>

        <MotionIn className={`${NEU.formCard} w-full md:w-1/2`} variant='right' delay={0.1}>
          <WordStaggerReveal
            as='div'
            tone='onLight'
            text={FORM_HEADLINE}
            className="mb-4 text-lg font-semibold leading-snug text-gray-900 sm:mb-6 sm:text-xl dark:text-gray-100"
            viewport={{ once: true, amount: 0.5 }}
          />

          <AnimatePresence mode='wait'>
          {step === 1 && (
            <motion.form
              key='step-1'
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
              className='space-y-4 sm:space-y-6'
            >
              <Input
                variant='neu'
                label='Your Name *'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
              <Input
                variant='neu'
                label='Email *'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='you@example.com'
                required
              />
              <motion.button
                type='submit'
                className={`${NEU.btnPrimary} w-full py-3`}
                aria-label='Continue to message step'
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Continue
              </motion.button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              key='step-2'
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              onSubmit={handleSubmit}
              className='space-y-4 sm:space-y-6'
            >
              <Input
                variant='neu'
                label='Explain your idea *'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Tell me about your project...'
                rows='4'
                required
              />

              <div className='flex items-start gap-2 text-xs text-gray-800 sm:text-sm dark:text-gray-300'>
                <input
                  type='checkbox'
                  required
                  className='mt-1 border-2 border-gray-900 dark:border-gray-400 dark:bg-[#111111]'
                />
                <p>
                  I accept the{' '}
                  <a href='#' className={NEU.link}>
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href='#' className={NEU.link}>
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <motion.button
                type='submit'
                className={`${NEU.btnPrimary} w-full py-3`}
                aria-label='Submit message'
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Submit
              </motion.button>
            </motion.form>
          )}
          </AnimatePresence>

          <Modal
            isOpen={loading}
            icon='⏳'
            title='Sending your message...'
            closable={false}
            onClose={() => {}}
          />
          <Modal
            isOpen={!!successMessage}
            icon='✅'
            title={successMessage}
            onClose={() => setSuccessMessage('')}
          />
          <Modal
            isOpen={!!errorMessage}
            icon='❌'
            title={errorMessage}
            onClose={() => setErrorMessage('')}
          />
        </MotionIn>
      </div>
    </div>
  );
}
