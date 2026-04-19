'use client';

import React from 'react';
import { NEU } from './neuTheme';

export default function Modal({ isOpen, onClose, icon, title, children, closable = true }) {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-[#0e0d12]/80 backdrop-blur-sm'
      onClick={closable ? onClose : undefined}
    >
      <div
        className={`${NEU.modalPanel} ${closable ? '' : 'animate-pulse'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {icon && <div className='mb-2 text-5xl'>{icon}</div>}
        {title && <h2 className={`${NEU.display} text-xl`}>{title}</h2>}
        {children}
        {closable && (
          <button type='button' onClick={onClose} className={`${NEU.btn} mt-5 text-xs`} aria-label='Close dialog'>
            OK
          </button>
        )}
      </div>
    </div>
  );
}
