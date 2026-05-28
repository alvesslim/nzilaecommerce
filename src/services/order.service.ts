import { api } from './api';
import { Order } from '@/types/order';
export const orderService = {
  getAll: () => api.get<Order[]>('/orders'),
  getById: (id: string) => api.get<Order>(`/orders/${id}`),
  create: (data: Partial<Order>) => api.post<Order>('/orders', data),
  updateStatus: (id: string, status: string) => api.put(`/orders/${id}`, { status }),
};
