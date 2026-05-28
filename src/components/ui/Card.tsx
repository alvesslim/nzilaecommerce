import React from 'react';
interface CardProps { children: React.ReactNode; className?: string; }
export default function Card({ children, className = '' }: CardProps) {
  return <div className={`bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 ${className}`}>{children}</div>;
}
