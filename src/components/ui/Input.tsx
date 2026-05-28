import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function Input({ label, error, icon, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-[0.85rem] font-bold text-[var(--text3)] uppercase tracking-wide">{label}</label>}
      <div className="relative">
        {icon && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text3)] text-[1.2rem]">{icon}</span>}
        <input className={`w-full bg-[var(--surface2)] border border-[var(--border)] text-[var(--text)] py-3.5 ${icon ? 'pl-12' : 'pl-4'} pr-4 rounded-xl font-[var(--font-inter)] outline-none transition-colors focus:border-[var(--blue)] ${error ? 'border-[#E11D48]' : ''} ${className}`} {...props} />
      </div>
      {error && <span className="text-[0.8rem] text-[#E11D48]">{error}</span>}
    </div>
  );
}
