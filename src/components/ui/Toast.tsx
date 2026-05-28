'use client';

import React from 'react';
import { useToast } from '@/hooks/useToast';
import { CheckCircle } from '@phosphor-icons/react';

export default function Toast() {
  const { toast } = useToast();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] bg-surface text-text px-6 py-4 rounded-xl shadow-xl border border-border flex items-center gap-3 animate-slide-up max-sm:bottom-4 max-sm:left-4 max-sm:right-4 max-sm:w-auto">
      <CheckCircle weight="fill" className="text-accent text-[1.4rem]" />
      <span className="font-medium text-[0.95rem]">{toast.message}</span>
    </div>
  );
}
