import React from 'react';
import { formatCurrency } from '@/lib/formatters';

interface Props { subtotal: number; shipping: number; discount: number; total: number; }

export default function CartSummary({ subtotal, shipping, discount, total }: Props) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <h3 className="font-heading font-bold text-lg mb-4">Resumo do Pedido</h3>
      <div className="flex justify-between py-2 text-text2"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
      <div className="flex justify-between py-2 text-text2"><span>Entrega</span><span>{shipping === 0 ? 'Grátis' : formatCurrency(shipping)}</span></div>
      {discount > 0 && <div className="flex justify-between py-2 text-text2"><span>Desconto</span><span className="text-[#E11D48]">- {formatCurrency(discount)}</span></div>}
      <div className="flex justify-between py-4 mt-2 border-t border-border font-bold text-lg"><span>Total</span><span>{formatCurrency(total)}</span></div>
    </div>
  );
}
