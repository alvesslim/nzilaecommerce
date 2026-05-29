'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Cart } from '../types/cart';
import { Product } from '../types/product';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const defaultCart: Cart = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  discount: 0,
  shipping: 0,
  total: 0
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(defaultCart);
  
  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('nziladigital_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error parsing cart from local storage', e);
      }
    }
  }, []);
  
  // Save to local storage when cart changes
  useEffect(() => {
    localStorage.setItem('nziladigital_cart', JSON.stringify(cart));
  }, [cart]);

  const calculateTotals = (items: CartItem[]) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    // Example logic: Free shipping if subtotal > 50.000, 10% discount if coupon
    const discount = 0; // In a real app, this would be based on cart.couponCode
    const shipping = subtotal > 0 ? 0 : 0; // Free shipping for now based on original HTML
    
    const total = subtotal - discount + shipping;
    
    return { totalItems, subtotal, discount, shipping, total };
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.product.id === product.id);
      
      let newItems = [...prevCart.items];
      
      if (existingItemIndex >= 0) {
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity
        };
      } else {
        newItems.push({ product, quantity });
      }
      
      return {
        ...prevCart,
        items: newItems,
        ...calculateTotals(newItems)
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.product.id !== productId);
      return {
        ...prevCart,
        items: newItems,
        ...calculateTotals(newItems)
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => {
      const newItems = prevCart.items.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      );
      
      return {
        ...prevCart,
        items: newItems,
        ...calculateTotals(newItems)
      };
    });
  };

  const clearCart = () => {
    setCart(defaultCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}
