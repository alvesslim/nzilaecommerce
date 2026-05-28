import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'geely-gx3pro',
    name: 'Geely GX3Pro',
    brand: 'Geely',
    price: 13980000,
    formattedPrice: 'AKZ 13.980.000',
    image: 'https://www.wantelcom.com/storage/ficheiros/JT4Md5wheeOPE4xjVwxe9esb37x6GD8MvNzAkjQX.jpg',
    category: 'Automóveis',
    rating: 4.8,
    reviewCount: 203,
    views: 203,
    badge: 'sale',
    badgeText: 'Vende-se',
    description: 'O Geely GX3Pro oferece conforto e economia num design compacto e moderno.'
  },
  {
    id: 'baic-x7-2025',
    name: 'BAIC X7 2025 1.5 7DCT LV4',
    brand: 'BAIC',
    price: 29925000,
    formattedPrice: 'AKZ 29.925.000',
    image: 'https://www.wantelcom.com/storage/ficheiros/egu3ngt70QivbMosqv8lp8cHfmqzDfVXLpHUVEta.jpg',
    category: 'Automóveis',
    rating: 4.5,
    reviewCount: 133,
    views: 133,
    badge: 'sale',
    badgeText: 'Vende-se'
  },
  {
    id: 'toyota-hilux',
    name: 'Hilux-Intermédiario',
    brand: 'Toyota',
    price: 47058270,
    formattedPrice: 'AKZ 47.058.270',
    image: 'https://www.wantelcom.com/storage/ficheiros/KzVli4ejpDJttIHjYT7d3kzibmhlIhyVCq1EUlK8.jpg',
    category: 'Automóveis',
    rating: 4.0,
    reviewCount: 54,
    views: 54,
    badge: 'new',
    badgeText: 'Novo'
  },
  {
    id: 'toyota-pickup',
    name: 'PICK-UP Cabine Dupla 4.2L',
    brand: 'Toyota',
    price: 68250000,
    formattedPrice: 'AKZ 68.250.000',
    image: 'https://www.wantelcom.com/storage/ficheiros/mEFFhN8WLR6Lt0s3miSql58f7xCO7I5Agkc7j7i8.jpg',
    category: 'Automóveis',
    rating: 5.0,
    reviewCount: 62,
    views: 62,
    badge: 'sale',
    badgeText: 'Vende-se'
  },
  {
    id: 'suzuki-spresso',
    name: 'S.PRESSO AUTOMATICO',
    brand: 'Suzuki',
    price: 10950000,
    formattedPrice: 'AKZ 10.950.000',
    image: 'https://www.wantelcom.com/storage/ficheiros/MBxKYhIB7OU7yPKVsgfj2iQLO9l5PA1U39gXL7l3.jpg',
    category: 'Automóveis',
    rating: 5.0,
    reviewCount: 68,
    views: 68,
    badge: 'hot',
    badgeText: 'Hot 🔥'
  },
  {
    id: 'suzuki-swift',
    name: 'SWIFT 1,2L GLX SLDA',
    brand: 'Suzuki',
    price: 14550000,
    formattedPrice: 'AKZ 14.550.000',
    image: 'https://www.wantelcom.com/storage/ficheiros/GgBTuh8DfnORi7yBwjciGXonqdWajKwSeCjhkzpK.jpg',
    category: 'Automóveis',
    rating: 4.5,
    reviewCount: 55,
    views: 55
  },
  {
    id: 'suzuki-grand-vitara',
    name: 'SUZUKI GRAND VITARA 1.5L',
    brand: 'Suzuki',
    price: 34492500,
    oldPrice: 36000000,
    formattedPrice: 'AKZ 34.492.500',
    formattedOldPrice: 'AKZ 36.000.000',
    image: 'https://www.wantelcom.com/storage/ficheiros/KAcnDENwA1sjJyEeWqBxlSVI5MoRwZ835fqxA2H6.jpg',
    images: [
      'https://www.wantelcom.com/storage/ficheiros/KAcnDENwA1sjJyEeWqBxlSVI5MoRwZ835fqxA2H6.jpg'
    ],
    category: 'Automóveis',
    rating: 5.0,
    reviewCount: 92,
    views: 92,
    badge: 'new',
    badgeText: 'Novo',
    description: 'O SUZUKI GRAND VITARA 1.5L GLX 4WD HYBRID redefine o que é possível num SUV. Com motor híbrido avançado, tração às quatro rodas e design imponente, é a escolha perfeita para qualquer terreno.',
    specs: [
      { label: 'Motor', value: '1.5L Híbrido' },
      { label: 'Transmissão', value: 'Automática' },
      { label: 'Tração', value: '4WD (4x4)' },
      { label: 'Combustível', value: 'Gasolina/Elétrico' },
      { label: 'Lugares', value: '5 Lugares' },
      { label: 'Garantia', value: '3 anos ou 100.000 km' }
    ],
    stock: 14,
    soldThisMonth: 12
  }
];
