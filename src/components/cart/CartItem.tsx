import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash } from '@phosphor-icons/react';
import { CartItem as CartItemType } from '@/types/cart';
import { formatCurrency } from '@/lib/formatters';

interface Props { item: CartItemType; onUpdateQuantity: (id: string, q: number) => void; onRemove: (id: string) => void; }

export default function CartItem({ item, onUpdateQuantity, onRemove }: Props) {
  return (
    <div className="flex gap-4 items-center bg-surface border border-border p-4 rounded-xl">
      <div className="w-20 h-20 bg-surface2 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={item.product.image} alt={item.product.name} width={80} height={80} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm">{item.product.name}</h4>
        <div className="text-accent font-bold mt-1">{formatCurrency(item.product.price)}</div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} className="p-1 bg-surface2 rounded"><Minus /></button>
        <span className="w-6 text-center text-sm">{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="p-1 bg-surface2 rounded"><Plus /></button>
      </div>
      <button onClick={() => onRemove(item.product.id)} className="p-2 text-text3 hover:text-[#E11D48] transition-colors"><Trash size={20} /></button>
    </div>
  );
}
