'use client';

import React from 'react';

const darkInputClasses =
  'w-full rounded-sm border border-white/15 bg-[#111111] p-2.5 text-gray-100 placeholder:text-gray-500 outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/25 sm:p-3';

const neuInputClasses =
  'w-full rounded-sm border border-gray-900/20 bg-white p-2.5 text-gray-900 placeholder:text-gray-500 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 dark:border-white/15 dark:bg-[#111111] dark:text-gray-100 sm:p-3';

export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows,
  variant = 'dark',
}) {
  const Component = rows ? 'textarea' : 'input';
  const inputClasses = variant === 'neu' ? neuInputClasses : darkInputClasses;
  const labelClasses =
    variant === 'neu'
      ? 'mb-1 block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-gray-600 dark:text-gray-400 sm:mb-2'
      : 'mb-1 block text-sm font-medium text-gray-300 sm:mb-2';

  return (
    <div>
      {label && <label className={labelClasses}>{label}</label>}
      <Component
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={inputClasses}
      />
    </div>
  );
}
