'use client';
import React, { useState } from 'react';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { useCart } from '@/hooks/useCart';
import CartDrawer from './CartDrawer';

export default function CartButton() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="relative p-2 text-text hover:text-blue transition-colors bg-transparent border-none cursor-pointer flex items-center justify-center">
        <ShoppingCartSimple size={24} />
        {cart.totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#E11D48] text-white text-[0.65rem] font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {cart.totalItems}
          </span>
        )}
      </button>
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
