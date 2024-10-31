import { ApiClient } from './client';
import { ENDPOINTS } from '../../config/api';
import type {
  PaginationParams,
  CategoryResponse,
  OrderResponse,
  CustomerResponse,
} from './types';
import type { WooProduct } from '../../types';

class WooCommerceApi {
  private client: ApiClient;

  constructor() {
    this.client = new ApiClient();
  }

  // Products
  async getProducts(params?: PaginationParams) {
    return this.client.get<WooProduct[]>(ENDPOINTS.products, params as Record<string, string>);
  }

  async getProduct(id: number) {
    return this.client.get<WooProduct>(`${ENDPOINTS.products}/${id}`);
  }

  // Categories
  async getCategories(params?: PaginationParams) {
    return this.client.get<CategoryResponse[]>(ENDPOINTS.categories, params as Record<string, string>);
  }

  async getCategory(id: number) {
    return this.client.get<CategoryResponse>(`${ENDPOINTS.categories}/${id}`);
  }

  // Orders
  async createOrder(orderData: Partial<OrderResponse>) {
    return this.client.post<OrderResponse>(ENDPOINTS.orders, orderData);
  }

  async getOrder(id: number) {
    return this.client.get<OrderResponse>(`${ENDPOINTS.orders}/${id}`);
  }

  async updateOrder(id: number, orderData: Partial<OrderResponse>) {
    return this.client.put<OrderResponse>(`${ENDPOINTS.orders}/${id}`, orderData);
  }

  // Customers
  async createCustomer(customerData: Partial<CustomerResponse>) {
    return this.client.post<CustomerResponse>(ENDPOINTS.customers, customerData);
  }

  async getCustomer(id: number) {
    return this.client.get<CustomerResponse>(`${ENDPOINTS.customers}/${id}`);
  }

  async updateCustomer(id: number, customerData: Partial<CustomerResponse>) {
    return this.client.put<CustomerResponse>(`${ENDPOINTS.customers}/${id}`, customerData);
  }
}

export const wooApi = new WooCommerceApi();
export * from './types';