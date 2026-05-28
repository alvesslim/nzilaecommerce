export type UserRole = 'customer' | 'admin' | 'manager';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  phone?: string;
  address?: UserAddress;
  createdAt: string;
}

export interface UserAddress {
  street: string;
  city: string;
  province?: string;
  country: string;
  zipCode?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}
