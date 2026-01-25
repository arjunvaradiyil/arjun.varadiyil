'use client';

import React from 'react';

const inputClasses = "w-full p-2 sm:p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400 focus:border-blue-400 dark:focus:border-cyan-400 outline-none";

export default function Input({ label, type = "text", name, value, onChange, placeholder, required = false, rows }) {
  const Component = rows ? 'textarea' : 'input';
  
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-1 sm:mb-2">
          {label}
        </label>
      )}
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
