import { useCartContext } from '../context/CartContext';

export function useCart() {
  const context = useCartContext();
  
  return {
    ...context,
    itemCount: context.cart.totalItems,
    items: context.cart.items,
    isEmpty: context.cart.items.length === 0,
  };
}
