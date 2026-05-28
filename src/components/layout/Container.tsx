import React from 'react';

export default function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-[1200px] mx-auto px-8 max-sm:px-4 ${className}`}>{children}</div>;
}
