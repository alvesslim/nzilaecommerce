'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react';
import { ROUTES, CONFIG } from '@/constants/routes';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 px-8 pb-8 mt-20 max-sm:pt-16 max-sm:px-6 max-sm:pb-8 max-sm:mt-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 max-lg:grid-cols-2 max-lg:gap-12 max-sm:grid-cols-1 max-sm:text-center">
        
        {/* Company Info */}
        <div>
          <div className="mb-6 max-sm:flex max-sm:justify-center">
            <Image 
              src="/images/wantel-WHITE.png" 
              alt="WantelCom" 
              width={160} 
              height={40} 
              className="footer-logo-img logo-dark" 
            />
            <Image 
              src="/images/wantel.png" 
              alt="WantelCom" 
              width={160} 
              height={40} 
              className="footer-logo-img logo-light hidden" 
            />
          </div>
          <p className="text-text2 text-[0.95rem] leading-[1.7] mb-8 max-w-[300px] max-sm:mx-auto">
            {CONFIG.SITE_DESC}
          </p>
          <div className="flex gap-3 max-sm:justify-center">
            <a href="https://web.facebook.com/chicoduracomerciogeral" target="_blank" rel="noreferrer" className="w-10 h-10 bg-surface2 border border-border rounded-lg flex items-center justify-center text-[1.1rem] text-text cursor-pointer transition-colors hover:border-blue hover:bg-blue">
              <FacebookLogo weight="regular" />
            </a> 
            <div className="w-10 h-10 bg-surface2 border border-border rounded-lg flex items-center justify-center text-[1.1rem] text-text cursor-pointer transition-colors hover:border-blue hover:bg-blue">
              <InstagramLogo weight="regular" />
            </div>
            <div className="w-10 h-10 bg-surface2 border border-border rounded-lg flex items-center justify-center text-[1.1rem] text-text cursor-pointer transition-colors hover:border-blue hover:bg-blue">
              <LinkedinLogo weight="regular" />
            </div>
            <div className="w-10 h-10 bg-surface2 border border-border rounded-lg flex items-center justify-center text-[1.1rem] text-text cursor-pointer transition-colors hover:border-blue hover:bg-blue">
              <YoutubeLogo weight="regular" />
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.08em] mb-6 text-text">Empresa</h4>
          <ul className="list-none flex flex-col gap-4">
            <li><Link href={ROUTES.ABOUT} className="text-text2 no-underline text-[0.9rem] transition-colors hover:text-blue-light">Sobre Nós</Link></li>
            <li><span className="text-text2 no-underline text-[0.9rem] transition-colors cursor-pointer hover:text-blue-light">Carreiras</span></li>
            <li><span className="text-text2 no-underline text-[0.9rem] transition-colors cursor-pointer hover:text-blue-light">Parceiros</span></li>
            <li><Link href={ROUTES.CONTACT} className="text-text2 no-underline text-[0.9rem] transition-colors hover:text-blue-light">Contactos</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.08em] mb-6 text-text">Suporte</h4>
          <ul className="list-none flex flex-col gap-4">
            <li><span className="text-text2 no-underline text-[0.9rem] transition-colors cursor-pointer hover:text-blue-light">FAQ</span></li>
            <li><span className="text-text2 no-underline text-[0.9rem] transition-colors cursor-pointer hover:text-blue-light">Devoluções</span></li>
            <li><span className="text-text2 no-underline text-[0.9rem] transition-colors cursor-pointer hover:text-blue-light">Garantia</span></li>
            <li><span className="text-text2 no-underline text-[0.9rem] transition-colors cursor-pointer hover:text-blue-light">Entregas</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.08em] mb-6 text-text">Contacto</h4>
          <ul className="list-none flex flex-col gap-4 text-text2 text-[0.9rem]">
            <li>{CONFIG.CONTACT_PHONE}</li>
            <li>{CONFIG.CONTACT_EMAIL}</li>
            <li>{CONFIG.CONTACT_ADDRESS}</li>
            <li>Seg–Sex: 8h–18h</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-border flex justify-between items-center flex-wrap gap-4 max-sm:flex-col max-sm:text-center">
        <div className="text-text3 text-[0.85rem]">
          &copy; {new Date().getFullYear()} {CONFIG.SITE_NAME} &mdash; Comércio e Serviço, Lda. Todos os direitos reservados.
        </div>
        <div className="flex gap-8 max-sm:justify-center max-sm:flex-wrap">
          <span className="text-text3 text-[0.85rem] cursor-pointer transition-colors hover:text-text">Privacidade</span>
          <span className="text-text3 text-[0.85rem] cursor-pointer transition-colors hover:text-text">Termos de Serviço</span>
          <span className="text-text3 text-[0.85rem] cursor-pointer transition-colors hover:text-text">Política de Cookies</span>
        </div>
      </div>
    </footer>
  );
}
