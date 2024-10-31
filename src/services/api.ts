import { wooApi } from './api';
export { wooApi };

export const fetchProducts = async () => {
  try {
    const response = await wooApi.getProducts();
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};