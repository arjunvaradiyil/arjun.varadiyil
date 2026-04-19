'use client';

import React from 'react';

const darkInputClasses =
  'w-full rounded-lg border border-white/15 bg-zinc-950/60 p-2 text-gray-100 placeholder:text-gray-500 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/40 dark:focus:border-cyan-400/60 dark:focus:ring-cyan-400/35 sm:p-3';

const neuInputClasses =
  'w-full rounded-lg border-2 border-gray-900 bg-white p-2 text-gray-900 placeholder:text-gray-500 outline-none focus:border-indigo-800 focus:ring-2 focus:ring-amber-400/90 sm:p-3';

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
      ? 'mb-1 block text-sm font-semibold text-gray-800 sm:mb-2'
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
