export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  formattedPrice: string;
  formattedOldPrice?: string;
  image: string;
  images?: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviewCount?: number;
  views: number;
  badge?: 'sale' | 'new' | 'hot';
  badgeText?: string;
  description?: string;
  specs?: ProductSpec[];
  stock?: number;
  soldThisMonth?: number;
  createdAt?: string;
}

export interface ProductFilters {
  category?: string;
  brand?: string;
  maxPrice?: number;
  minRating?: number;
  search?: string;
  sort?: 'relevant' | 'price-asc' | 'price-desc' | 'best-selling' | 'newest';
}
