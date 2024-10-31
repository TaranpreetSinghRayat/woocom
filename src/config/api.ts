export const API_CONFIG = {
  baseUrl: process.env.API_BASE_URL || 'https://api.example.com',
  consumerKey: process.env.WC_CONSUMER_KEY || '',
  consumerSecret: process.env.WC_CONSUMER_SECRET || '',
  version: 'v3',
};

export const ENDPOINTS = {
  products: '/products',
  categories: '/products/categories',
  orders: '/orders',
  customers: '/customers',
} as const;