'use client';

import React from 'react';

export default function Modal({ isOpen, onClose, icon, title, children, closable = true }) {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/60 z-50'
      onClick={closable ? onClose : undefined}
    >
      <div
        className={`bg-white text-black p-6 rounded-2xl shadow-lg text-center ${closable ? 'animate-fadeIn' : 'animate-pulse'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {icon && <div className='text-5xl mb-2'>{icon}</div>}
        {title && <h2 className='text-xl font-bold'>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
