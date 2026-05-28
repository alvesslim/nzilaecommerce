'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  EnvelopeSimple, 
  Clock,
  PaperPlaneRight
} from '@phosphor-icons/react';
import { CONFIG } from '@/constants/routes';
import { useToast } from '@/hooks/useToast';

export default function ContactPage() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('Mensagem enviada! Responderemos em breve.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-[calc(72px+3rem)] pb-24 max-w-[1200px] mx-auto px-8 max-sm:px-4 max-sm:pt-[calc(72px+2rem)]">
      
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight mb-4">
          Contacte-nos
        </h1>
        <p className="text-[1.1rem] text-text2 leading-[1.6]">
          Estamos aqui para ajudar! Entre em contacto connosco para tirar dúvidas, pedir orçamentos ou solicitar assistência técnica.
        </p>
      </div>

      <div className="grid grid-cols-[1fr_1.5fr] gap-12 max-lg:grid-cols-1">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-surface border border-border p-8 rounded-3xl">
            <h2 className="font-heading text-[1.5rem] font-bold mb-8">Informações</h2>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue/10 text-blue rounded-xl flex items-center justify-center text-[1.5rem] flex-shrink-0">
                  <MapPin weight="fill" />
                </div>
                <div>
                  <h3 className="font-bold text-[1.1rem] mb-1">Localização</h3>
                  <p className="text-text2 leading-[1.5]">{CONFIG.CONTACT_ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue/10 text-blue rounded-xl flex items-center justify-center text-[1.5rem] flex-shrink-0">
                  <Phone weight="fill" />
                </div>
                <div>
                  <h3 className="font-bold text-[1.1rem] mb-1">Telefone</h3>
                  <p className="text-text2 leading-[1.5]">{CONFIG.CONTACT_PHONE}</p>
                  <p className="text-text2 leading-[1.5]">+244 900 000 000</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue/10 text-blue rounded-xl flex items-center justify-center text-[1.5rem] flex-shrink-0">
                  <EnvelopeSimple weight="fill" />
                </div>
                <div>
                  <h3 className="font-bold text-[1.1rem] mb-1">Email</h3>
                  <p className="text-text2 leading-[1.5]">{CONFIG.CONTACT_EMAIL}</p>
                  <p className="text-text2 leading-[1.5]">suporte@wantelcom.ao</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue/10 text-blue rounded-xl flex items-center justify-center text-[1.5rem] flex-shrink-0">
                  <Clock weight="fill" />
                </div>
                <div>
                  <h3 className="font-bold text-[1.1rem] mb-1">Horário</h3>
                  <p className="text-text2 leading-[1.5]">Seg - Sex: 08:00h - 18:00h</p>
                  <p className="text-text2 leading-[1.5]">Sábados: 09:00h - 13:00h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface border border-border p-10 rounded-3xl max-sm:p-6">
          <h2 className="font-heading text-[1.8rem] font-bold mb-2">Envie uma Mensagem</h2>
          <p className="text-text2 mb-8">Preencha o formulário e a nossa equipa responderá o mais breve possível.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-bold text-text3 uppercase tracking-wide">O seu Nome</label>
                <input 
                  type="text" 
                  required
                  placeholder="Nome completo" 
                  className="w-full bg-surface2 border border-border text-text py-3.5 px-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-bold text-text3 uppercase tracking-wide">O seu Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="Endereço de email" 
                  className="w-full bg-surface2 border border-border text-text py-3.5 px-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[0.85rem] font-bold text-text3 uppercase tracking-wide">Assunto</label>
              <input 
                type="text" 
                required
                placeholder="Como podemos ajudar?" 
                className="w-full bg-surface2 border border-border text-text py-3.5 px-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[0.85rem] font-bold text-text3 uppercase tracking-wide">Mensagem</label>
              <textarea 
                required
                rows={6}
                placeholder="Escreva a sua mensagem aqui..." 
                className="w-full bg-surface2 border border-border text-text py-3.5 px-4 rounded-xl font-inter outline-none transition-colors focus:border-blue focus:bg-surface resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="mt-2 py-4 px-8 bg-blue text-white border-none rounded-xl text-[1.05rem] font-bold cursor-pointer flex justify-center items-center gap-2 transition-transform hover:-translate-y-0.5 hover:bg-blue-dark disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? 'A Enviar...' : (
                <>Enviar Mensagem <PaperPlaneRight weight="fill" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
