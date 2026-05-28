import { CartItem } from './cart';

export type OrderStatus = 'pending' | 'processing' | 'shipping' | 'delivered' | 'cancelled';
export type PaymentMethod = 'multicaixa' | 'bank-transfer' | 'cash-on-delivery';

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  shippingAddress: {
    name: string;
    surname: string;
    address: string;
    city: string;
    phone: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface OrderSummary {
  orderNumber: string;
  productName: string;
  date: string;
  status: OrderStatus;
}
