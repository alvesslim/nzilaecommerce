import { api } from './api';
export const paymentService = {
  createPayment: (orderId: string, method: string) => api.post('/payments', { orderId, method }),
  verifyPayment: (paymentId: string) => api.get(`/payments/${paymentId}`),
};
