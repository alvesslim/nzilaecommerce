'use client';

import React from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-heading font-bold mb-4 text-[#E11D48]">Algo correu mal!</h2>
      <p className="text-text2 mb-8 max-w-md">{error.message || 'Ocorreu um erro inesperado. Por favor tente novamente.'}</p>
      <button onClick={() => reset()} className="btn-hero primary">
        Tentar novamente
      </button>
    </div>
  );
}
