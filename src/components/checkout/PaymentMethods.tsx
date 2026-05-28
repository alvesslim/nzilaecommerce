import React from 'react';

export default function PaymentMethods() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-3 p-4 border border-blue bg-blue/5 rounded-xl cursor-pointer">
        <input type="radio" name="payment" defaultChecked className="accent-blue" />
        <span className="font-bold">Multicaixa Express</span>
      </label>
      <label className="flex items-center gap-3 p-4 border border-border bg-surface rounded-xl cursor-pointer">
        <input type="radio" name="payment" className="accent-blue" />
        <span className="font-bold">Transferência Bancária</span>
      </label>
    </div>
  );
}
