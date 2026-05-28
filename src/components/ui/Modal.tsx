'use client';
import React from 'react';
import { X } from '@phosphor-icons/react';

interface ModalProps { isOpen: boolean; onClose: () => void; title?: string; children: React.ReactNode; }

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 max-w-[500px] w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          {title && <h3 className="font-heading text-[1.3rem] font-bold">{title}</h3>}
          <button onClick={onClose} className="bg-transparent border-none text-[var(--text3)] text-[1.5rem] cursor-pointer hover:text-[var(--text)]"><X /></button>
        </div>
        {children}
      </div>
    </div>
  );
}
