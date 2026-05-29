'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Lightbulb, Users, Trophy } from '@phosphor-icons/react';
import { CONFIG } from '@/constants/routes';

export default function AboutPage() {
  return (
    <div className="pt-[calc(72px+3rem)] pb-24 max-w-[1200px] mx-auto px-8 max-sm:px-4 max-sm:pt-[calc(72px+2rem)]">
      
      {/* Hero */}
      <div className="text-center max-w-[800px] mx-auto mb-20">
        <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight mb-6">
          Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue">Nzila E-commerce</span>
        </h1>
        <p className="text-[1.2rem] text-text2 leading-[1.6]">
          A sua parceira de confiança em soluções tecnológicas avançadas. Desde a nossa fundação, o nosso objetivo tem sido conectar os angolanos às melhores marcas e inovações mundiais.
        </p>
      </div>
      
      {/* Team Image Section */}
      <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-24 max-md:aspect-[16/9]">
        <Image 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
          alt="Equipa Nzila E-commerce" 
          width={1200} 
          height={600} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-2 gap-12 mb-24 max-md:grid-cols-1">
        <div className="bg-surface border border-border p-12 rounded-3xl max-sm:p-8">
          <div className="w-14 h-14 bg-blue/10 text-blue rounded-2xl flex items-center justify-center text-[2rem] mb-6">
            <Target weight="fill" />
          </div>
          <h2 className="font-heading text-[1.8rem] font-bold mb-4">A Nossa Missão</h2>
          <p className="text-text2 leading-[1.7] text-[1.05rem]">
            Facilitar o acesso à tecnologia de ponta no mercado angolano, oferecendo produtos de alta qualidade com um serviço de excelência, transparência e compromisso com a satisfação de cada cliente.
          </p>
        </div>
        <div className="bg-surface border border-border p-12 rounded-3xl max-sm:p-8">
          <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center text-[2rem] mb-6">
            <Lightbulb weight="fill" />
          </div>
          <h2 className="font-heading text-[1.8rem] font-bold mb-4">A Nossa Visão</h2>
          <p className="text-text2 leading-[1.7] text-[1.05rem]">
            Ser reconhecida como a principal referência nacional no fornecimento de soluções tecnológicas inovadoras, impulsionando o desenvolvimento digital e o sucesso de indivíduos e empresas em Angola.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-[2.5rem] font-extrabold mb-4">Os Nossos Valores</h2>
        <p className="text-text2 max-w-[600px] mx-auto text-[1.1rem]">
          Princípios fundamentais que guiam todas as nossas ações e decisões no dia-a-dia da Nzila E-commerce.
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-6 mb-24 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          { icon: <Trophy />, title: 'Excelência', desc: 'Procuramos sempre o melhor em produtos e serviços.' },
          { icon: <Users />, title: 'Foco no Cliente', desc: 'O cliente está no centro de todas as nossas decisões.' },
          { icon: <Target />, title: 'Inovação', desc: 'Estamos sempre atualizados com as últimas tecnologias.' },
          { icon: <Lightbulb />, title: 'Integridade', desc: 'Atuamos com ética, transparência e honestidade.' }
        ].map((val, idx) => (
          <div key={idx} className="bg-surface border border-border p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="text-[2.5rem] text-blue mb-4">{val.icon}</div>
            <h3 className="font-heading text-[1.2rem] font-bold mb-2">{val.title}</h3>
            <p className="text-text2 text-[0.95rem] leading-[1.6]">{val.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
