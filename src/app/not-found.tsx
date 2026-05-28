'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-heading font-black text-blue mb-4">404</h1>
      <h2 className="text-2xl font-heading font-bold mb-4">Página não encontrada</h2>
      <p className="text-text2 mb-8 max-w-md">
        A página que procura não existe ou foi movida. Verifique o URL ou volte à página inicial.
      </p>
      <Link href={ROUTES.HOME} className="btn-hero primary">
        Voltar ao Início
      </Link>
    </div>
  );
}
