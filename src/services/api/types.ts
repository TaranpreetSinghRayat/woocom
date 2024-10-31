export interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}

export interface PaginationParams {
  page?: number;
  per_page?: number;
  search?: string;
  after?: string;
  before?: string;
  order?: 'asc' | 'desc';
  orderby?: string;
}

export interface CategoryResponse {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  count: number;
  image: {
    id: number;
    src: string;
    alt: string;
  };
}

export interface OrderResponse {
  id: number;
  status: string;
  total: string;
  line_items: Array<{
    id: number;
    name: string;
    product_id: number;
    quantity: number;
    price: string;
  }>;
  shipping: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
}

export interface CustomerResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
}