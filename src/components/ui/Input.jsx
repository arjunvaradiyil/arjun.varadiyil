'use client';

import React from 'react';

const darkInputClasses =
  'w-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2.5 text-gray-100 placeholder:text-[var(--color-foreground-faint)] outline-none transition focus:border-[var(--color-foreground)]/50 focus:ring-1 focus:ring-white/20 sm:p-3';

const editorialInputClasses =
  'w-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-foreground-faint)] outline-none transition focus:border-[var(--color-foreground)] focus:ring-1 focus:ring-[var(--color-border-strong)] sm:px-4 sm:py-3.5';

const neuInputClasses =
  'w-full border border-gray-900/20 bg-white p-2.5 text-gray-900 placeholder:text-gray-500 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 dark:border-[var(--color-border)] dark:bg-[var(--color-surface-elevated)] dark:text-gray-100 sm:p-3';

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
  const inputClasses =
    variant === 'editorial'
      ? editorialInputClasses
      : variant === 'neu'
        ? neuInputClasses
        : darkInputClasses;
  const labelClasses =
    variant === 'editorial'
      ? 'mb-2.5 block font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-foreground-subtle)]'
      : variant === 'neu'
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
