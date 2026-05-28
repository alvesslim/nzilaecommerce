'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  House, 
  ArrowLeft, 
  Star, 
  Minus, 
  Plus, 
  CheckCircle, 
  ArrowRight, 
  ShoppingCartSimple, 
  Truck, 
  ArrowUUpLeft, 
  LockKey 
} from '@phosphor-icons/react';
import { PRODUCTS } from '@/data/products';
import { ROUTES } from '@/constants/routes';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/useToast';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // In a real app we'd fetch the product by ID
  // For this mock, we'll try to find it, otherwise fallback to the featured one
  let product = PRODUCTS.find(p => p.id === params.id);
  if (!product) {
    product = PRODUCTS.find(p => p.id === 'suzuki-grand-vitara')!;
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
    showToast(`${qty}x ${product.name} adicionado ao carrinho!`);
  };

  const changeQty = (d: number) => {
    setQty(Math.max(1, qty + d));
  };

  const images = product.images || [product.image, product.image, product.image, product.image];

  return (
    <div className="grid grid-cols-2 gap-16 pt-[calc(72px+3rem)] max-w-[1200px] mx-auto px-8 pb-16 max-md:grid-cols-1 max-md:gap-8 max-sm:px-4 max-sm:pt-[calc(72px+2rem)]">
      
      {/* Product Gallery */}
      <div className="flex flex-col gap-6">
        <div className="w-full aspect-square bg-surface border border-border rounded-3xl overflow-hidden cursor-zoom-in relative max-sm:rounded-2xl">
          <Image 
            src={images[activeImage]} 
            alt={product.name} 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`w-20 h-20 bg-surface2 border-2 rounded-xl overflow-hidden cursor-pointer transition-colors flex-shrink-0 max-sm:w-[60px] max-sm:h-[60px] ${activeImage === idx ? 'border-blue' : 'border-transparent'}`}
              onClick={() => setActiveImage(idx)}
            >
              <div className="relative w-full h-full">
                <Image src={img} alt={`${product.name} ${idx}`} fill className={`object-cover transition-opacity ${activeImage === idx ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-6">
        <div className="text-[0.85rem] text-text3 flex justify-between items-center max-sm:text-[0.75rem]">
          <span className="flex items-center gap-1.5"><House weight="regular" /> / {product.category}</span>
          <button 
            onClick={() => router.back()} 
            className="bg-transparent border-none text-blue-light font-bold cursor-pointer flex items-center gap-2 hover:underline"
          >
            <ArrowLeft weight="bold" /> Voltar
          </button>
        </div>
        
        <h1 className="text-[2.2rem] font-heading font-extrabold tracking-tight leading-[1.2] max-sm:text-[1.6rem]">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:gap-2">
          <span className="flex gap-[2px] text-gold text-[0.95rem]">
            {[1,2,3,4,5].map(i => <Star key={i} weight="fill" />)}
          </span>
          <span className="text-[0.95rem] text-text2">{product.rating.toFixed(1)} ({product.reviewCount} avaliações)</span>
          {product.soldThisMonth && (
            <span className="text-[0.9rem] text-text3">&middot; {product.soldThisMonth} vendidos este mês</span>
          )}
        </div>
        
        <div className="flex items-baseline gap-4 max-sm:flex-wrap max-sm:gap-2">
          <div className="font-heading text-[2.5rem] font-extrabold text-text max-sm:text-[2rem]">{product.formattedPrice}</div>
          {product.formattedOldPrice && (
            <div className="text-[1.1rem] text-text3 line-through">{product.formattedOldPrice}</div>
          )}
          {product.badge && (
            <div className="bg-[#E11D48]/15 text-[#E11D48] text-[0.8rem] font-bold px-3 py-1 rounded-md uppercase tracking-wide">
              {product.badgeText}
            </div>
          )}
        </div>
        
        <p className="text-[1rem] text-text2 leading-[1.8]">
          {product.description || 'Um produto premium selecionado pela equipa da WantelCom para oferecer a melhor qualidade ao melhor preço do mercado angolano.'}
        </p>
        
        {product.specs && (
          <div className="bg-surface border border-border rounded-2xl p-8 max-sm:p-6">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="flex justify-between py-3 border-b border-border text-[0.95rem] first:pt-0 last:border-0 last:pb-0 max-sm:flex-col max-sm:gap-1 max-sm:py-2">
                <span className="text-text3 font-medium">{spec.label}</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-6 mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div className="flex items-center border border-border rounded-xl overflow-hidden bg-surface">
            <button className="bg-transparent border-none text-text w-11 h-11 cursor-pointer text-[1.2rem] flex items-center justify-center transition-colors hover:bg-surface2" onClick={() => changeQty(-1)}>
              <Minus weight="regular" />
            </button>
            <input 
              className="bg-transparent text-text border-none w-12 text-center font-heading font-bold text-[1.1rem] outline-none" 
              value={qty} 
              readOnly 
            />
            <button className="bg-transparent border-none text-text w-11 h-11 cursor-pointer text-[1.2rem] flex items-center justify-center transition-colors hover:bg-surface2" onClick={() => changeQty(1)}>
              <Plus weight="regular" />
            </button>
          </div>
          <span className="text-[0.9rem] text-text3 flex items-center gap-1.5">
            <CheckCircle weight="fill" className="text-accent" /> Em stock ({product.stock || 15} unidades)
          </span>
        </div>
        
        <div className="flex gap-4 mt-4 max-sm:flex-col">
          <button 
            className="flex-1 py-5 bg-blue text-white border-none rounded-xl text-[1.05rem] font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all hover:bg-blue-dark hover:-translate-y-0.5"
            onClick={() => {
              handleAddToCart();
              router.push(ROUTES.CHECKOUT);
            }}
          >
            Comprar Agora <ArrowRight weight="bold" />
          </button>
          <button 
            className="flex-1 py-5 bg-transparent border border-border text-text rounded-xl text-[1.05rem] font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all hover:border-blue hover:bg-surface"
            onClick={handleAddToCart}
          >
            <ShoppingCartSimple weight="bold" /> Adicionar
          </button>
        </div>
        
        <div className="flex gap-6 flex-wrap mt-4">
          <span className="text-[0.85rem] text-text3 font-medium flex items-center gap-1.5"><Truck weight="regular" className="text-xl" /> Entrega gratuita em Luanda</span>
          <span className="text-[0.85rem] text-text3 font-medium flex items-center gap-1.5"><ArrowUUpLeft weight="regular" className="text-xl" /> 30 dias para devolver</span>
          <span className="text-[0.85rem] text-text3 font-medium flex items-center gap-1.5"><LockKey weight="regular" className="text-xl" /> Pagamento seguro</span>
        </div>
      </div>
    </div>
  );
}
