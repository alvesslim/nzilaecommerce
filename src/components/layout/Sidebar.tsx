'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, Star } from '@phosphor-icons/react';
import { CATEGORIES, BRANDS } from '@/data/categories';
import { useToast } from '@/hooks/useToast';

export default function ShopSidebar() {
  const { showToast } = useToast();
  const [price, setPrice] = useState(1000000);

  return (
    <div className="bg-surface border border-border rounded-2xl p-8 h-fit sticky top-[100px] max-md:hidden">
      <h3 className="font-heading text-[1.2rem] font-bold mb-8 flex items-center gap-2">
        <SlidersHorizontal weight="regular" /> Filtros
      </h3>
      
      <div className="mb-10">
        <label className="block text-[0.8rem] text-text3 font-semibold uppercase tracking-wider mb-4">Categoria</label>
        <div className="flex items-center gap-3 py-1.5 cursor-pointer text-[0.95rem] text-text2 transition-colors hover:text-text">
          <input type="checkbox" defaultChecked className="accent-blue cursor-pointer w-4 h-4" /> Todos
        </div>
        {CATEGORIES.slice(0, 5).map(cat => (
          <div key={cat.id} className="flex items-center gap-3 py-1.5 cursor-pointer text-[0.95rem] text-text2 transition-colors hover:text-text">
            <input type="checkbox" className="accent-blue cursor-pointer w-4 h-4" /> {cat.name}
          </div>
        ))}
      </div>
      
      <div className="mb-10">
        <label className="block text-[0.8rem] text-text3 font-semibold uppercase tracking-wider mb-4">Marca</label>
        {BRANDS.slice(0, 5).map(brand => (
          <div key={brand} className="flex items-center gap-3 py-1.5 cursor-pointer text-[0.95rem] text-text2 transition-colors hover:text-text">
            <input type="checkbox" className="accent-blue cursor-pointer w-4 h-4" /> {brand}
          </div>
        ))}
      </div>
      
      <div className="mb-10">
        <label className="block text-[0.8rem] text-text3 font-semibold uppercase tracking-wider mb-4">Preço Máximo (AKZ)</label>
        <input 
          type="range" 
          className="w-full accent-blue cursor-pointer my-4" 
          min="10000" 
          max="2000000" 
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <div className="flex justify-between text-[0.85rem] text-text3">
          <span>10.000</span>
          <span>{price.toLocaleString('pt-AO')}</span>
        </div>
      </div>
      
      <div className="mb-10">
        <label className="block text-[0.8rem] text-text3 font-semibold uppercase tracking-wider mb-4">Avaliação</label>
        <div className="flex items-center gap-3 py-1.5 cursor-pointer text-[0.95rem] text-text2 transition-colors hover:text-text">
          <input type="radio" name="rating" className="accent-blue cursor-pointer w-4 h-4" /> 
          <Star weight="fill" className="text-gold" /> 5 estrelas
        </div>
        <div className="flex items-center gap-3 py-1.5 cursor-pointer text-[0.95rem] text-text2 transition-colors hover:text-text">
          <input type="radio" name="rating" className="accent-blue cursor-pointer w-4 h-4" /> 
          <Star weight="fill" className="text-gold" /> 4+ estrelas
        </div>
        <div className="flex items-center gap-3 py-1.5 cursor-pointer text-[0.95rem] text-text2 transition-colors hover:text-text">
          <input type="radio" name="rating" className="accent-blue cursor-pointer w-4 h-4" /> 
          <Star weight="fill" className="text-gold" /> 3+ estrelas
        </div>
      </div>
      
      <button 
        className="w-full p-4 bg-blue text-white border-none rounded-xl font-semibold flex justify-center cursor-pointer transition-transform hover:-translate-y-0.5 hover:bg-blue-dark"
        onClick={() => showToast('Filtros aplicados!')}
      >
        Aplicar Filtros
      </button>
    </div>
  );
}
