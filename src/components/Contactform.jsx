'use client';

import React, { useState, useCallback } from 'react';
import Modal from './ui/Modal';
import Input from './ui/Input';
import { NEU } from './ui/neuTheme';

const INITIAL_FORM_DATA = { name: '', email: '', message: '' };

export default function Contactform() {
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

  return (
    <div
      id='contact'
      className={`${NEU.contactBg} relative flex min-h-[calc(100svh-3.5rem)] snap-start snap-always items-end justify-center overflow-hidden pb-12 pt-24 md:min-h-[calc(100svh-4rem)] md:items-center md:pb-16 md:pt-28`}
    >
      <div className='relative z-10 mx-auto flex w-11/12 max-w-6xl flex-col gap-10 lg:w-9/12 md:flex-row md:gap-12'>
        <div className='flex w-full flex-col justify-center pr-0 text-center md:w-1/2 md:pr-12'>
          <p className={`${NEU.eyebrow} mb-4 flex justify-center`}>
            <span className={NEU.badge}>Contact</span>
          </p>
          <h1 className='text-4xl leading-tight sm:text-5xl md:text-7xl lg:text-8xl'>
            <span className={`${NEU.contactHeroMuted} block font-syne font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl`}>
              Ready?
            </span>
            <span className={`${NEU.contactHeroDisplay} mt-2 block sm:mt-3 md:text-7xl lg:text-8xl`}>
              <span className={`${NEU.contactSticker} mx-auto inline-block`}>Let&apos;s talk</span>
            </span>
          </h1>
        </div>

        <div className={`${NEU.formCard} w-full md:w-1/2`}>
          <div className='mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl'>
            Let&apos;s connect and build something meaningful together.
          </div>

          {step === 1 && (
            <form
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
              <button type='submit' className={`${NEU.btnPrimary} w-full py-3`} aria-label='Continue to message step'>
                Continue
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
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

              <div className='flex items-start gap-2 text-xs text-gray-800 sm:text-sm'>
                <input type='checkbox' required className='mt-1 border-2 border-gray-900' />
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

              <button type='submit' className={`${NEU.btnPrimary} w-full py-3`} aria-label='Submit message'>
                Submit
              </button>
            </form>
          )}

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
        </div>
      </div>
    </div>
  );
}
