'use client';
import React from 'react';
import { X } from '@phosphor-icons/react';
import { useCart } from '@/hooks/useCart';
import CartItem from './CartItem';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-surface h-full shadow-2xl flex flex-col border-l border-border animate-slide-left">
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="font-heading font-bold text-xl">Carrinho ({cart.totalItems})</h2>
          <button onClick={onClose} className="p-2 text-text3 hover:text-text"><X size={24} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {cart.items.length === 0 ? (
            <div className="text-center text-text2 mt-10">O carrinho está vazio.</div>
          ) : (
            cart.items.map(item => <CartItem key={item.product.id} item={item} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />)
          )}
        </div>
        
        {cart.items.length > 0 && (
          <div className="p-6 border-t border-border bg-surface">
            <button 
              className="w-full py-4 bg-blue text-white rounded-xl font-bold hover:bg-blue-dark transition-colors"
              onClick={() => { onClose(); router.push(ROUTES.CART); }}
            >
              Ver Carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
