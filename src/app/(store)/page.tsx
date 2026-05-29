'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, 
  ShoppingCartSimple, 
  Lightning, 
  Tag, 
  EnvelopeSimpleOpen,
  Star
} from '@phosphor-icons/react';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES, BRANDS } from '@/data/categories';
import { ROUTES } from '@/constants/routes';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/useToast';

import {
  BookOpen,
  Laptop,
  Cpu,
  Plug,
  House as HouseIcon,
  Gear,
  Car,
  Storefront
} from '@phosphor-icons/react';

// Static map of category icon names to their components — no wildcard import needed
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  'ph-book-open': BookOpen,
  'ph-laptop': Laptop,
  'ph-cpu': Cpu,
  'ph-plug': Plug,
  'ph-house': HouseIcon,
  'ph-gear': Gear,
  'ph-car': Car,
  'ph-storefront': Storefront,
};

const IconByName = ({ icon, className }: { icon: string, className?: string }) => {
  const IconComp = ICON_MAP[icon];
  if (!IconComp) return null;
  return <IconComp weight="regular" className={className} />;
};

export default function Home() {
  const router = useRouter();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 47, s: 33 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 2; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredProduct = PRODUCTS.find(p => p.id === 'suzuki-grand-vitara');
  const flashSaleProducts = PRODUCTS.filter(p => ['geely-gx3pro', 'baic-x7-2025', 'toyota-hilux', 'toyota-pickup'].includes(p.id));
  const trendingProducts = PRODUCTS.filter(p => ['suzuki-spresso', 'suzuki-swift', 'suzuki-grand-vitara', 'geely-gx3pro'].includes(p.id));

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div>
            <h1>Tecnologia<br/>que <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-light to-accent">transforma</span><br/>o seu negócio</h1>
            <p className="text-text2 text-[1.15rem] leading-[1.7] mb-10 font-light max-w-[500px]">
              Smartphones, computadores, gaming e muito mais. Tudo com garantia, suporte dedicado e entrega rápida em Angola.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href={ROUTES.SHOP} className="btn-hero primary">
                Explorar Loja <ArrowRight />
              </Link>
              <Link href={ROUTES.ABOUT} className="btn-hero outline">
                Sobre Nós
              </Link>
            </div>
            <div className="flex gap-12 mt-12 pt-8 border-t border-border max-sm:gap-6 max-sm:justify-center">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-[1.8rem] font-extrabold text-text">12K+</span>
                <span className="text-[0.8rem] text-text3 uppercase tracking-wider font-medium">Produtos</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading text-[1.8rem] font-extrabold text-text">50K+</span>
                <span className="text-[0.8rem] text-text3 uppercase tracking-wider font-medium">Clientes</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading text-[1.8rem] font-extrabold text-text">99%</span>
                <span className="text-[0.8rem] text-text3 uppercase tracking-wider font-medium">Satisfação</span>
              </div>
            </div>
          </div>
          
          {/* Hero Visual Device */}
          <div className="relative flex items-center justify-center max-md:hidden">
            <div className="w-full max-w-[500px] bg-surface border border-border rounded-3xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.1),transparent_60%)] pointer-events-none"></div>
              <div className="text-[0.75rem] text-text3 uppercase tracking-widest mb-6 font-semibold flex items-center gap-1.5">
                <Star weight="fill" className="text-gold" /> Produto em Destaque
              </div>
              
              {featuredProduct && (
                <div className="flex flex-col gap-5">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative bg-surface2">
                    <Image src={featuredProduct.image} alt={featuredProduct.name} fill className="object-cover" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-heading font-bold text-[1.2rem]">{featuredProduct.name}</div>
                      <div className="text-[0.8rem] text-blue-light mt-1">{featuredProduct.brand} &middot; {featuredProduct.category}</div>
                    </div>
                    <div className="font-heading text-[1.5rem] font-extrabold text-accent">{featuredProduct.formattedPrice}</div>
                  </div>
                  <button 
                    className="w-full p-3.5 bg-blue text-white border-none rounded-xl text-[0.95rem] font-semibold cursor-pointer flex items-center justify-center gap-2 transition-colors hover:bg-blue-dark mt-2"
                    onClick={() => {
                      addToCart(featuredProduct);
                      showToast(`${featuredProduct.name} adicionado ao carrinho!`);
                    }}
                  >
                    <ShoppingCartSimple /> Adicionar ao Carrinho
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FLASH SALE */}
      <div className="bg-gradient-to-br from-surface to-surface2 border border-border rounded-3xl p-16 mx-8 my-12 relative overflow-hidden max-md:p-8 max-md:mx-4 max-sm:mx-2 max-sm:p-6">
        <div className="absolute -top-1/2 -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(225,29,72,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="flex items-center justify-between mb-12 flex-wrap gap-8 max-sm:justify-center max-sm:text-center max-sm:flex-col">
          <div>
            <div className="font-heading text-[2rem] font-extrabold max-sm:text-[1.5rem]">
              <span className="text-[#E11D48] inline-flex items-center gap-2"><Lightning weight="fill" /> Flash Sale</span> &mdash; Ofertas Relâmpago
            </div>
            <div className="text-text2 text-[0.95rem] mt-2 max-w-[500px]">
              Termina em breve! Aproveite os melhores preços. Quantidades limitadas.
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[rgba(225,29,72,0.1)] border border-[rgba(225,29,72,0.2)] rounded-xl py-3 px-4 text-center min-w-[64px]">
              <div className="font-heading font-extrabold text-[1.5rem] text-[#E11D48] leading-none">{String(timeLeft.h).padStart(2, '0')}</div>
              <div className="text-[0.65rem] text-text2 uppercase tracking-wider mt-1">Hrs</div>
            </div>
            <div className="bg-[rgba(225,29,72,0.1)] border border-[rgba(225,29,72,0.2)] rounded-xl py-3 px-4 text-center min-w-[64px]">
              <div className="font-heading font-extrabold text-[1.5rem] text-[#E11D48] leading-none">{String(timeLeft.m).padStart(2, '0')}</div>
              <div className="text-[0.65rem] text-text2 uppercase tracking-wider mt-1">Min</div>
            </div>
            <div className="bg-[rgba(225,29,72,0.1)] border border-[rgba(225,29,72,0.2)] rounded-xl py-3 px-4 text-center min-w-[64px]">
              <div className="font-heading font-extrabold text-[1.5rem] text-[#E11D48] leading-none">{String(timeLeft.s).padStart(2, '0')}</div>
              <div className="text-[0.65rem] text-text2 uppercase tracking-wider mt-1">Seg</div>
            </div>
          </div>
        </div>
        
        <div className="products-grid">
          {flashSaleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="py-24 px-8 max-w-[1200px] mx-auto max-sm:px-4 max-sm:py-16">
        <div className="flex justify-between items-end mb-12 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight">Categorias</h2>
            <div className="text-text2 text-[0.95rem] mt-2">Explore toda a nossa gama de produtos tecnológicos</div>
          </div>
          <Link href={ROUTES.SHOP} className="text-blue-light text-[0.9rem] font-medium flex items-center gap-1.5 transition-colors hover:text-blue">
            Ver todas <ArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 max-sm:grid-cols-2">
          {CATEGORIES.map(cat => (
            <Link key={cat.id} href={`${ROUTES.SHOP}?category=${cat.id}`} className="bg-surface border border-border rounded-2xl p-6 text-center transition-all hover:border-blue hover:bg-surface2 hover:-translate-y-1 block no-underline group">
              <div className="text-[2.5rem] text-text mb-4 inline-block transition-colors group-hover:text-blue-light">
                <IconByName icon={cat.icon} />
              </div>
              <div className="font-heading text-[0.95rem] font-bold text-text">{cat.name}</div>
              <div className="text-[0.8rem] text-text3 mt-1.5">{cat.count} produtos</div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROMO BANNER */}
      <div className="bg-gradient-to-br from-[#2C2A22] to-blue rounded-3xl p-16 mx-8 flex items-center justify-between gap-12 relative overflow-hidden shadow-xl max-lg:flex-col max-lg:text-center max-lg:p-12 max-sm:mx-4 max-sm:p-8">
        <div className="absolute -right-[5%] -top-[20%] w-[400px] h-[400px] bg-white/5 rounded-full pointer-events-none max-lg:hidden"></div>
        <div className="absolute right-[20%] -bottom-[30%] w-[250px] h-[250px] bg-white/5 rounded-full pointer-events-none max-lg:hidden"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-[4px] text-white text-[0.75rem] font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            <Tag weight="fill" /> Mega Promoção
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white mb-4 leading-[1.1]">Black Friday<br/>o ano todo</h2>
          <p className="text-white/80 text-[1.1rem] leading-[1.6] max-w-[400px] max-lg:mx-auto">
            Descontos até 50% em centenas de produtos. Compre agora e poupe mais em tecnologia premium.
          </p>
          <Link href={ROUTES.SHOP} className="inline-block mt-8 py-3.5 px-8 bg-blue border border-blue text-white rounded-xl font-semibold transition-all hover:bg-blue-dark">
            Ver Promoções
          </Link>
        </div>
        <div className="relative z-10 w-[300px] max-lg:w-full max-lg:max-w-[320px]">
          <Image 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop" 
            alt="Promo Bags" 
            width={300} 
            height={400} 
            loading="lazy"
            className="w-full h-auto rounded-2xl shadow-lg" 
          />
        </div>
      </div>

      {/* TRENDING */}
      <section className="py-24 px-8 max-w-[1200px] mx-auto max-sm:px-4 max-sm:py-16">
        <div className="flex justify-between items-end mb-12 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight">Mais Vendidos</h2>
            <div className="text-text2 text-[0.95rem] mt-2">Os produtos favoritos dos nossos clientes</div>
          </div>
          <Link href={ROUTES.SHOP} className="text-blue-light text-[0.9rem] font-medium flex items-center gap-1.5 transition-colors hover:text-blue">
            Ver todos <ArrowRight />
          </Link>
        </div>
        <div className="products-grid">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="text-center pt-8 pb-16 px-8">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-3">Marcas Parceiras</h2>
        <div className="text-text2 text-[0.95rem] mb-12">Trabalhamos com as melhores marcas do mundo</div>
        <div className="flex gap-6 flex-wrap justify-center items-center">
          {BRANDS.map(brand => (
            <div key={brand} className="bg-surface border border-border rounded-xl px-8 py-4 font-heading font-bold text-[1rem] text-text3 transition-colors cursor-default hover:border-blue hover:text-text hover:bg-surface2">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <div className="bg-gradient-to-r from-surface to-surface2 border-t border-border py-24 px-8 text-center max-sm:py-16 max-sm:px-6">
        <div className="max-w-[600px] mx-auto">
          <h3 className="font-heading text-[2.2rem] font-extrabold mb-4 max-sm:text-[1.8rem]">
            Receba as melhores ofertas <EnvelopeSimpleOpen weight="fill" className="text-blue-light align-middle ml-2 inline" />
          </h3>
          <p className="text-text2 mb-10 text-[1.1rem] leading-[1.6]">
            Subscreva a nossa newsletter e seja o primeiro a saber das promoções exclusivas e novidades.
          </p>
          <div className="flex gap-4 max-sm:flex-col">
            <input 
              type="email" 
              placeholder="O seu endereço de email..." 
              className="flex-1 bg-bg border border-border text-text py-4 px-6 rounded-xl font-inter text-[1rem] outline-none transition-colors focus:border-blue focus:ring-4 focus:ring-blue/10"
            />
            <button 
              className="bg-blue text-white border-none py-4 px-8 rounded-xl font-semibold cursor-pointer transition-transform hover:bg-blue-dark hover:-translate-y-1 max-sm:w-full"
              onClick={() => showToast('Subscrito com sucesso!')}
            >
              Subscrever
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
