import React from 'react';

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-surface border border-border p-6 rounded-2xl">
        <h3 className="text-text3 text-sm font-bold uppercase">Vendas Hoje</h3>
        <p className="font-heading text-2xl font-bold mt-2">AKZ 125.000</p>
      </div>
      <div className="bg-surface border border-border p-6 rounded-2xl">
        <h3 className="text-text3 text-sm font-bold uppercase">Pedidos Novos</h3>
        <p className="font-heading text-2xl font-bold mt-2">12</p>
      </div>
      <div className="bg-surface border border-border p-6 rounded-2xl">
        <h3 className="text-text3 text-sm font-bold uppercase">Clientes</h3>
        <p className="font-heading text-2xl font-bold mt-2">1.250</p>
      </div>
      <div className="bg-surface border border-border p-6 rounded-2xl">
        <h3 className="text-text3 text-sm font-bold uppercase">Produtos</h3>
        <p className="font-heading text-2xl font-bold mt-2">345</p>
      </div>
    </div>
  );
}
