'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, Plus, Star, StarHalf, Fire } from '@phosphor-icons/react';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/useToast';
import { ROUTES } from '@/constants/routes';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    showToast(`${product.name} adicionado ao carrinho!`);
  };

  const renderStars = () => {
    const stars = [];
    const rating = Math.floor(product.rating);
    const hasHalf = product.rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i} weight="fill" className="text-gold" />);
      } else if (i === rating && hasHalf) {
        stars.push(<StarHalf key={i} weight="fill" className="text-gold" />);
      } else {
        stars.push(<Star key={i} weight="regular" className="text-gold" />);
      }
    }
    return <span className="flex gap-[2px] text-[0.9rem]">{stars}</span>;
  };

  return (
    <Link href={ROUTES.PRODUCT(product.id)} className="product-card group bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-250 relative flex flex-col hover:border-blue hover:-translate-y-1.5 hover:shadow-lg">
      
      {/* Badge */}
      {product.badge && (
        <div className={`absolute top-4 left-4 z-10 text-[0.7rem] font-bold px-3 py-1 rounded-md uppercase tracking-wide ${
          product.badge === 'sale' ? 'bg-[#E11D48] text-white' : 
          product.badge === 'new' ? 'bg-accent text-black' : 
          'bg-[#E11D48] text-white flex items-center gap-1'
        }`}>
          {product.badgeText}
          {product.badge === 'hot' && <Fire weight="fill" />}
        </div>
      )}

      {/* Wishlist Button */}
      <div 
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-glass-bg backdrop-blur-[4px] border border-border text-text2 flex items-center justify-center cursor-pointer text-[1.1rem] transition-all hover:border-border hover:text-text hover:bg-glass-bg-hover"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          showToast('Adicionado aos favoritos!');
        }}
      >
        <Heart weight="regular" />
      </div>

      {/* Image */}
      <div className="w-full aspect-square bg-surface2 overflow-hidden relative">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-[0.75rem] text-blue-light uppercase tracking-wider mb-1.5 font-semibold">
          {product.brand}
        </div>
        <div className="font-heading text-[1.05rem] font-bold leading-[1.4] mb-3 text-text">
          {product.name}
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1.5 text-[0.8rem] text-text3 mb-4 mt-auto">
          {renderStars()}
          <span className="flex items-center gap-1 ml-1">
            <Eye weight="regular" /> {product.views}
          </span>
        </div>

        {/* Footer (Price + Add to Cart) */}
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div>
            <span className="font-heading font-extrabold text-[1.2rem] text-text">{product.formattedPrice}</span>
            {product.formattedOldPrice && (
              <span className="text-[0.8rem] text-text3 line-through ml-2 font-normal">
                {product.formattedOldPrice}
              </span>
            )}
          </div>
          <button 
            className="w-10 h-10 rounded-lg bg-surface2 border border-border text-text flex items-center justify-center text-[1.2rem] transition-all hover:bg-blue hover:text-white hover:border-blue"
            onClick={handleAddToCart}
          >
            <Plus weight="regular" />
          </button>
        </div>
      </div>
    </Link>
  );
}
