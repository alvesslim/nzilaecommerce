import React from 'react';
import { Product } from '@/types/product';
import ProductPrice from './ProductPrice';
import { Star } from '@phosphor-icons/react';

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-heading text-3xl font-bold">{product.name}</h1>
      <div className="flex items-center gap-2 text-gold">
        {[1,2,3,4,5].map(i => <Star key={i} weight={i <= Math.round(product.rating) ? 'fill' : 'regular'} />)}
        <span className="text-text2 text-sm ml-2">({product.reviewCount} reviews)</span>
      </div>
      <ProductPrice price={product.price} oldPrice={product.oldPrice} />
      <p className="text-text2">{product.description}</p>
    </div>
  );
}
