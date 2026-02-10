'use client';

import React, { useState, useCallback } from 'react';
import Modal from './ui/Modal';
import Input from './ui/Input';

const INITIAL_FORM_DATA = { name: '', email: '', message: '' };

export default function Contactform() {
  const [step, setStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    setErrorMessage("");
    setSuccessMessage("");

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
        // Show the actual error message from the API
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
      className='min-h-screen flex items-end md:items-center justify-center text-white relative pt-32 pb-12 md:pt-48 md:pb-16'
      style={{
        backgroundImage: "url('https://getwallpapers.com/wallpaper/full/6/c/d/129192.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 70%',
      }}
    >
      {/* Overlay for readability */}
      <div className='absolute inset-0 bg-black/40 dark:bg-black/50' />

      {/* Content */}
      <div className='relative z-10 flex flex-col md:flex-row w-11/12 lg:w-9/12 mx-auto gap-8 max-w-6xl'>
        {/* Left Side Heading */}
        <div className='flex flex-col justify-center w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-left'>
          <h1 className='bebas-neue-regular text-4xl sm:text-4xl md:text-9xl lg:text-10xl font-extrabold leading-tight text-white drop-shadow-md'>
            Ready? <br />
            <span className='text-blue-400 dark:text-cyan-400'>Let&apos;s Talk</span>
          </h1>
        </div>

        {/* Right Side Form */}
        <div className='w-full md:w-1/2 bg-[#110f0f] border border-gray-600 dark:border-[#747373] rounded-2xl p-6 sm:p-8 shadow-xl ring-1 ring-black/20'>
          {/* Text */}
          <div className='text-2xl sm:text-3xl mb-4 sm:mb-6 text-gray-100 font-semibold'>
            Let&apos;s Connect and Build Something Amazing Together.
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
                label='Your Name *'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
              <Input
                label='Email *'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='you@example.com'
                required
              />
              <button
                type='submit'
                className='w-full bg-blue-400 dark:bg-cyan-400 text-black font-bold py-2.5 sm:py-3 rounded-lg hover:bg-blue-300 dark:hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98] transition'
                aria-label="Continue to message step"
              >
                Continue
              </button>
            </form>
          )}

          {step === 2 && (
            <form
              onSubmit={handleSubmit}
              className='space-y-4 sm:space-y-6'
            >
              <Input
                label='Explain your idea *'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Tell me about your project...'
                rows='4'
                required
              />

              <div className='flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm'>
                <input type='checkbox' required />
                <p>
                  I accept the{' '}
                  <a href='#' className='text-blue-400 dark:text-cyan-400 underline'>
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href='#' className='text-blue-400 dark:text-cyan-400 underline'>
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-4'>
                <button
                  type='button'
                  onClick={() => setStep(1)}
                  className='w-full sm:w-1/2 bg-gray-700 text-white font-bold py-2.5 sm:py-3 rounded-lg hover:bg-gray-600 transition focus-visible:ring-2 focus-visible:ring-blue-400'
                  aria-label="Go back to name and email"
                >
                  Back
                </button>
                <button
                  type='submit'
                  className='w-full sm:w-1/2 bg-blue-400 dark:bg-cyan-400 text-black font-bold py-2.5 sm:py-3 rounded-lg hover:bg-blue-300 dark:hover:bg-cyan-300 transition focus-visible:ring-2 focus-visible:ring-white'
                  aria-label="Submit message"
                >
                  Submit
                </button>
              </div>
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
