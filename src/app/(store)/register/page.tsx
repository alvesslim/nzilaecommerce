'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { EnvelopeSimple, LockKey, User, Phone, ArrowRight } from '@phosphor-icons/react';
import { ROUTES } from '@/constants/routes';
import { useToast } from '@/hooks/useToast';

export default function RegisterPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('Conta criada com sucesso!');
      router.push(ROUTES.HOME);
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pt-[72px] pb-12">
      <div className="w-full max-w-[500px] bg-surface border border-border rounded-3xl p-10 relative overflow-hidden max-sm:p-8">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-light to-blue"></div>
        <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-auth-glow rounded-full blur-[40px] pointer-events-none"></div>
        
        <div className="text-center mb-8 relative z-10">
          <h1 className="font-heading text-[2rem] font-extrabold tracking-tight mb-2">Criar Conta</h1>
          <p className="text-text2 text-[0.95rem]">Junte-se à maior loja de tecnologia de Angola</p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-5 relative z-10">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.85rem] font-bold text-text2 uppercase tracking-wide">Nome Completo</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 text-[1.2rem]">
                <User weight="regular" />
              </span>
              <input 
                type="text" 
                placeholder="O seu nome" 
                required
                className="w-full bg-surface2 border border-border text-text py-3.5 pl-12 pr-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.85rem] font-bold text-text2 uppercase tracking-wide">Email</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 text-[1.2rem]">
                <EnvelopeSimple weight="regular" />
              </span>
              <input 
                type="email" 
                placeholder="O seu email" 
                required
                className="w-full bg-surface2 border border-border text-text py-3.5 pl-12 pr-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.85rem] font-bold text-text2 uppercase tracking-wide">Telefone</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 text-[1.2rem]">
                <Phone weight="regular" />
              </span>
              <input 
                type="tel" 
                placeholder="O seu telefone" 
                className="w-full bg-surface2 border border-border text-text py-3.5 pl-12 pr-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.85rem] font-bold text-text2 uppercase tracking-wide">Palavra-passe</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 text-[1.2rem]">
                  <LockKey weight="regular" />
                </span>
                <input 
                  type="password" 
                  placeholder="Palavra-passe" 
                  required
                  className="w-full bg-surface2 border border-border text-text py-3.5 pl-12 pr-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.85rem] font-bold text-text2 uppercase tracking-wide">Confirmar</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 text-[1.2rem]">
                  <LockKey weight="regular" />
                </span>
                <input 
                  type="password" 
                  placeholder="Confirmar" 
                  required
                  className="w-full bg-surface2 border border-border text-text py-3.5 pl-12 pr-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
                />
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-2 py-4 bg-blue text-white border-none rounded-xl text-[1rem] font-bold cursor-pointer flex justify-center items-center gap-2 transition-transform hover:-translate-y-0.5 hover:bg-blue-dark disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {loading ? 'A registar...' : (
              <>Criar Conta <ArrowRight weight="bold" /></>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center text-[0.95rem] text-text2 relative z-10">
          Já tem uma conta?{' '}
          <Link href={ROUTES.LOGIN} className="text-blue-light font-bold no-underline hover:underline">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
