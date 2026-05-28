import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', size = 'md', isLoading, children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl cursor-pointer transition-all border-none';
  const variants: Record<string, string> = {
    primary: 'bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)]',
    secondary: 'bg-[var(--surface2)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface3)]',
    outline: 'bg-transparent border border-[var(--border)] text-[var(--text)] hover:border-[var(--blue)]',
    ghost: 'bg-transparent text-[var(--text2)] hover:bg-[var(--surface2)]',
    danger: 'bg-[#E11D48] text-white hover:bg-[#BE123C]',
  };
  const sizes: Record<string, string> = {
    sm: 'text-[0.85rem] py-2 px-4',
    md: 'text-[0.95rem] py-3 px-6',
    lg: 'text-[1.05rem] py-4 px-8',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${isLoading ? 'opacity-60 cursor-wait' : ''} ${className}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : null}
      {children}
    </button>
  );
}
