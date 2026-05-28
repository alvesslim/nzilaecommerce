'use client';

import React from 'react';
import ShopSidebar from '@/components/layout/Sidebar';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function ShopPage() {
  return (
    <div className="grid grid-cols-[260px_1fr] gap-12 pt-[calc(72px+3rem)] pb-16 max-w-[1200px] mx-auto px-8 max-md:grid-cols-1 max-md:px-4">
      <ShopSidebar />
      
      <div>
        {/* Shop Header */}
        <div className="flex justify-between items-center mb-8 bg-surface p-5 px-8 rounded-2xl border border-border max-sm:flex-col max-sm:items-start max-sm:gap-3 max-sm:p-4">
          <div className="text-[0.95rem] text-text2">
            Mostrando <strong className="text-text font-semibold">{PRODUCTS.length} produtos</strong>
          </div>
          <select className="bg-surface2 border border-border text-text py-2.5 px-4 rounded-lg text-[0.9rem] font-inter cursor-pointer outline-none max-sm:w-full">
            <option>Mais relevante</option>
            <option>Preço: Menor para Maior</option>
            <option>Preço: Maior para Menor</option>
            <option>Mais vendidos</option>
            <option>Novidades</option>
          </select>
        </div>
        
        {/* Products Grid */}
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
