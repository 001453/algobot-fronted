import { apiClient } from './apiClient';

export const tradingAPI = {
  getMarketData: () => 
    apiClient.get('/market/data'),
  
  createOrder: (orderData: any) =>
    apiClient.post('/orders', orderData),
  
  getPortfolio: () =>
    apiClient.get('/portfolio'),
  
  getTradeHistory: () =>
    apiClient.get('/trades/history')
};

export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    apiClient.post('/auth/login', credentials),
  
  register: (userData: { email: string; password: string; username: string }) =>
    apiClient.post('/auth/register', userData)
};
