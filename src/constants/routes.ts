export const ROUTES = {
  HOME: '/',
  SHOP: '/products',
  PRODUCT: (id: string) => `/products/${id}`,
  CATEGORIES: '/categories',
  CART: '/cart',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about',
  CONTACT: '/contact',
  ADMIN: {
    DASHBOARD: '/dashboard',
    PRODUCTS: '/products/admin',
    ORDERS: '/orders',
    USERS: '/users',
    ANALYTICS: '/analytics',
    SETTINGS: '/settings'
  }
};

export const CONFIG = {
  SITE_NAME: 'WantelCom',
  SITE_DESC: 'A sua loja de tecnologia premium em Angola. Produtos originais, garantia completa e suporte dedicado 24/7.',
  CONTACT_PHONE: '+244 946 798 270',
  CONTACT_EMAIL: 'geral@wantelcom.ao',
  CONTACT_ADDRESS: 'Luanda, Angola',
  CURRENCY: 'AKZ'
};
