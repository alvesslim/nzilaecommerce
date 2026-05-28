'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Minus, Plus, Trash, ArrowRight, Check } from '@phosphor-icons/react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/useToast';
import { ROUTES } from '@/constants/routes';

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart } = useCart();
  const { showToast } = useToast();
  const [coupon, setCoupon] = useState('');

  const formatCurrency = (val: number) => {
    return `AKZ ${val.toLocaleString('pt-AO')}`;
  };

  return (
    <div className="grid grid-cols-[1fr_380px] gap-12 max-w-[1200px] mx-auto px-8 pt-[calc(72px+3rem)] pb-16 max-lg:grid-cols-1 max-sm:px-4 max-sm:pt-[calc(72px+2rem)]">
      
      {/* Cart Items List */}
      <div>
        <h2 className="font-heading text-[2rem] font-extrabold mb-8">O seu Carrinho ({cart.totalItems})</h2>
        
        {cart.items.length === 0 ? (
          <div className="bg-surface border border-border rounded-2xl p-12 text-center">
            <p className="text-text2 text-lg mb-6">O seu carrinho está vazio.</p>
            <Link href={ROUTES.SHOP} className="btn-hero primary inline-flex">
              Explorar Produtos
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {cart.items.map((item) => (
              <div key={item.product.id} className="bg-surface border border-border rounded-2xl p-6 flex gap-6 items-center max-sm:flex-wrap max-sm:p-4 max-sm:gap-4">
                <div className="w-[100px] h-[100px] bg-surface2 rounded-xl overflow-hidden flex-shrink-0 max-sm:w-20 max-sm:h-20 max-[380px]:w-full max-[380px]:h-[180px]">
                  <Image src={item.product.image} alt={item.product.name} width={100} height={100} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 max-sm:w-[calc(100%-100px)] max-sm:min-w-[150px] max-[380px]:w-full">
                  <div className="font-heading font-bold text-[1.1rem] mb-1.5">{item.product.name}</div>
                  <div className="text-[0.85rem] text-text3">{item.product.category} &middot; {item.product.brand}</div>
                </div>
                
                <div className="flex items-center gap-6 max-sm:w-full max-sm:justify-between max-sm:border-t max-sm:border-border max-sm:pt-4 max-[380px]:mt-2">
                  <div className="flex items-center border border-border rounded-xl overflow-hidden bg-surface">
                    <button className="bg-transparent border-none text-text w-9 h-9 cursor-pointer text-lg flex items-center justify-center transition-colors hover:bg-surface2" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      <Minus weight="regular" />
                    </button>
                    <input 
                      className="bg-transparent text-text border-none w-10 text-center font-heading font-bold text-lg outline-none" 
                      value={item.quantity} 
                      readOnly 
                    />
                    <button className="bg-transparent border-none text-text w-9 h-9 cursor-pointer text-lg flex items-center justify-center transition-colors hover:bg-surface2" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      <Plus weight="regular" />
                    </button>
                  </div>
                  
                  <div className="font-heading font-extrabold text-[1.2rem] max-sm:text-[1.1rem]">{item.product.formattedPrice}</div>
                  
                  <button 
                    className="bg-transparent border-none text-text3 cursor-pointer text-[1.2rem] flex items-center justify-center transition-colors hover:text-[#E11D48]"
                    onClick={() => {
                      removeFromCart(item.product.id);
                      showToast('Item removido do carrinho');
                    }}
                    title="Remover"
                  >
                    <Trash weight="regular" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="bg-surface border border-border rounded-2xl p-8 h-fit sticky top-[100px] max-sm:p-6">
        <h3 className="font-heading text-[1.3rem] font-bold mb-8">Resumo do Pedido</h3>
        
        <div className="flex justify-between text-[0.95rem] py-3 border-b border-border text-text2">
          <span>Subtotal ({cart.totalItems} itens)</span>
          <span className="text-text font-medium">{formatCurrency(cart.subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-[0.95rem] py-3 border-b border-border text-text2">
          <span>Entrega</span>
          <span className="text-accent font-medium">{cart.shipping === 0 ? 'Grátis' : formatCurrency(cart.shipping)}</span>
        </div>
        
        {cart.discount > 0 && (
          <div className="flex justify-between text-[0.95rem] py-3 border-b border-border text-text2">
            <span>Desconto</span>
            <span className="text-[#E11D48] font-medium">&minus;{formatCurrency(cart.discount)}</span>
          </div>
        )}
        
        <div className="flex justify-between text-[1.2rem] py-6 font-heading font-extrabold text-text">
          <span>Total</span>
          <span className="text-blue-light">{formatCurrency(cart.total)}</span>
        </div>
        
        <div className="flex gap-2 my-6 max-sm:flex-col">
          <input 
            type="text" 
            placeholder="Código de cupom" 
            className="flex-1 bg-surface2 border border-border text-text py-3 px-4 rounded-xl font-inter outline-none transition-colors focus:border-blue"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button 
            className="bg-surface3 text-text border border-border py-3 px-5 rounded-xl font-semibold cursor-pointer transition-colors hover:bg-blue hover:border-blue max-sm:w-full max-sm:justify-center"
            onClick={() => showToast('Cupom aplicado!')}
          >
            Aplicar
          </button>
        </div>
        
        <button 
          className="w-full p-5 bg-blue text-white border-none rounded-xl text-[1.05rem] font-semibold cursor-pointer flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 hover:bg-blue-dark mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          onClick={() => router.push(ROUTES.CHECKOUT)}
          disabled={cart.items.length === 0}
        >
          Finalizar Compra <ArrowRight weight="bold" />
        </button>
        
        <button 
          className="w-full p-5 bg-surface2 border border-border text-text rounded-xl text-[1.05rem] font-semibold cursor-pointer flex items-center justify-center transition-colors hover:bg-surface mt-4"
          onClick={() => router.push(ROUTES.SHOP)}
        >
          Continuar a Comprar
        </button>
      </div>
    </div>
  );
}
