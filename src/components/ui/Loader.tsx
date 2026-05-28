import React from 'react';
export default function Loader({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'w-6 h-6 border-2', md: 'w-10 h-10 border-3', lg: 'w-14 h-14 border-4' };
  return <div className={`${s[size]} border-[var(--surface2)] border-t-[var(--blue)] rounded-full animate-spin`} />;
}
