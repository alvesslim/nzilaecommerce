'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ShoppingCart, 
  SignIn, 
  User, 
  List, 
  X, 
  Sun, 
  Moon 
} from '@phosphor-icons/react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/hooks/useCart';
import { ROUTES } from '@/constants/routes';

export default function Header() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] px-8 h-[72px] flex items-center justify-between bg-nav-bg backdrop-blur-[20px] border-b border-border">
      {/* LOGO */}
      <Link href={ROUTES.HOME} className="flex items-center gap-3 no-underline cursor-pointer group" onClick={closeMobileMenu}>
        <div className="relative w-[38px] h-[38px] flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="72" rx="10" fill="var(--surface2)" className="transition-colors group-hover:fill-surface3" />
            <path d="M16 54V18L36 46V18" stroke="var(--gold)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 46V18L56 54V18" stroke="var(--gold)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="56" cy="18" r="3.5" fill="var(--gold)" />
            <circle cx="16" cy="18" r="3.5" fill="var(--gold)" opacity="0.4" />
          </svg>
        </div>
        <div className="font-heading font-black text-[1.15rem] tracking-[0.16em] uppercase text-text transition-colors group-hover:text-gold select-none">
          NZILA <span className="text-gold">E-commerce</span>
        </div>
      </Link>

      {/* NAV MENU */}
      <div className={`flex flex-1 justify-end items-center max-lg:fixed max-lg:top-[72px] max-lg:right-[-100%] max-lg:w-full max-lg:max-w-[400px] max-lg:h-[calc(100vh-72px)] max-lg:bg-surface max-lg:border-l max-lg:border-border max-lg:flex-col max-lg:p-10 max-lg:transition-all max-lg:duration-300 max-lg:overflow-y-auto max-lg:shadow-[-10px_0_30px_rgba(0,0,0,0.1)] ${mobileMenuOpen ? 'max-lg:!right-0' : ''}`}>
        
        <div className="flex gap-10 items-center mx-auto max-lg:flex-col max-lg:w-full max-lg:m-0 max-lg:items-start max-lg:gap-6">
          <Link href={ROUTES.HOME} className="text-text2 no-underline text-sm font-medium transition-colors hover:text-text max-lg:text-lg max-lg:py-2 max-lg:block max-lg:w-full max-lg:border-b max-lg:border-white/5" onClick={closeMobileMenu}>Início</Link>
          <Link href={ROUTES.SHOP} className="text-text2 no-underline text-sm font-medium transition-colors hover:text-text max-lg:text-lg max-lg:py-2 max-lg:block max-lg:w-full max-lg:border-b max-lg:border-white/5" onClick={closeMobileMenu}>Loja</Link>
          <Link href={ROUTES.ABOUT} className="text-text2 no-underline text-sm font-medium transition-colors hover:text-text max-lg:text-lg max-lg:py-2 max-lg:block max-lg:w-full max-lg:border-b max-lg:border-white/5" onClick={closeMobileMenu}>Sobre Nós</Link>
          <Link href={ROUTES.CONTACT} className="text-text2 no-underline text-sm font-medium transition-colors hover:text-text max-lg:text-lg max-lg:py-2 max-lg:block max-lg:w-full max-lg:border-b max-lg:border-white/5" onClick={closeMobileMenu}>Contactos</Link>
        </div>
        
        <div className="flex items-center gap-4 max-lg:flex-col max-lg:w-full max-lg:mt-8 max-lg:ml-0">
          <button 
            className="bg-transparent border border-transparent text-text2 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-[1.4rem] transition-colors hover:bg-surface2 hover:text-gold max-lg:w-full max-lg:border-border max-lg:rounded-lg max-lg:gap-2 max-lg:h-[50px]" 
            onClick={() => { toggleTheme(); closeMobileMenu(); }} 
            title="Alternar Tema"
          >
            {theme === 'light' ? <Moon weight="regular" /> : <Sun weight="regular" />}
            <span className="hidden max-lg:inline-block text-base font-inter font-medium">Alternar Tema</span>
          </button>
          
          <Link 
            href={ROUTES.CART} 
            className="relative bg-transparent border border-border text-text2 py-2 px-5 rounded-lg text-sm cursor-pointer font-inter transition-colors flex items-center gap-1.5 hover:border-blue hover:text-text max-lg:w-full max-lg:justify-center max-lg:p-[1.1rem] max-lg:text-[1.05rem]" 
            onClick={closeMobileMenu}
          >
            <ShoppingCart size={18} />
            Carrinho 
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[0.65rem] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          
          <Link 
            href={ROUTES.LOGIN} 
            className="bg-transparent border border-border text-text2 py-2 px-5 rounded-lg text-sm cursor-pointer font-inter transition-colors flex items-center gap-1.5 hover:border-blue hover:text-text max-lg:w-full max-lg:justify-center max-lg:p-[1.1rem] max-lg:text-[1.05rem]" 
            onClick={closeMobileMenu}
          >
            <SignIn size={18} /> Entrar
          </Link>
          
          <Link 
            href={ROUTES.PROFILE} 
            className="bg-blue border-blue text-white py-2 px-5 rounded-lg text-sm cursor-pointer font-inter transition-colors flex items-center gap-1.5 hover:bg-blue-dark max-lg:w-full max-lg:justify-center max-lg:p-[1.1rem] max-lg:text-[1.05rem]" 
            onClick={closeMobileMenu}
          >
            <User size={18} /> Conta
          </Link>
        </div>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="hidden items-center gap-2 max-lg:flex">
        <button 
          className="bg-transparent border-none text-[1.8rem] text-text cursor-pointer flex items-center justify-center w-[44px] h-[44px] transition-colors hover:text-blue-light" 
          onClick={toggleMobileMenu} 
          title="Menu"
        >
          {mobileMenuOpen ? <X /> : <List />}
        </button>
      </div>
    </nav>
  );
}
