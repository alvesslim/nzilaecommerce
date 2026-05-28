import React from 'react';
import { formatCurrency } from '@/lib/formatters';

export default function ProductPrice({ price, oldPrice }: { price: number; oldPrice?: number }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-heading text-2xl font-bold">{formatCurrency(price)}</span>
      {oldPrice && <span className="text-text3 line-through text-lg">{formatCurrency(oldPrice)}</span>}
    </div>
  );
}
