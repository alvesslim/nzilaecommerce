import { PRODUCTS } from '@/data/products';
import { Product, ProductFilters } from '@/types/product';

export function useProducts(filters?: ProductFilters) {
  // TODO: Replace with API fetch
  let products = [...PRODUCTS];
  if (filters?.category) products = products.filter(p => p.category.toLowerCase() === filters.category!.toLowerCase());
  if (filters?.brand) products = products.filter(p => p.brand === filters.brand);
  if (filters?.maxPrice) products = products.filter(p => p.price <= filters.maxPrice!);
  if (filters?.search) {
    const s = filters.search.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(s) || p.brand.toLowerCase().includes(s));
  }
  return { products, isLoading: false, error: null };
}
