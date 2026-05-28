export const ROLES = {
  CUSTOMER: 'customer',
  ADMIN: 'admin',
  MANAGER: 'manager',
} as const;

export type RoleKey = keyof typeof ROLES;
export type RoleValue = typeof ROLES[RoleKey];

export const ROLE_PERMISSIONS = {
  customer: ['view_products', 'place_orders', 'manage_profile'],
  admin: ['view_products', 'place_orders', 'manage_profile', 'manage_products', 'manage_orders', 'manage_users', 'view_analytics'],
  manager: ['view_products', 'place_orders', 'manage_profile', 'manage_products', 'manage_orders', 'view_analytics'],
} as const;
