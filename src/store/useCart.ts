import { create } from 'zustand';
import { CartItem, WooProduct } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (product: WooProduct) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  total: 0,
  
  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      const price = parseFloat(product.price || product.regular_price || '0');
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + price
        };
      }
      
      return {
        items: [...state.items, { product, quantity: 1 }],
        total: state.total + price
      };
    });
  },
  
  removeItem: (productId) => {
    set((state) => {
      const item = state.items.find(item => item.product.id === productId);
      const price = item ? parseFloat(item.product.price || item.product.regular_price || '0') : 0;
      return {
        items: state.items.filter(item => item.product.id !== productId),
        total: state.total - (price * (item?.quantity || 0))
      };
    });
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => {
      const item = state.items.find(item => item.product.id === productId);
      if (!item) return state;
      
      const price = parseFloat(item.product.price || item.product.regular_price || '0');
      const oldTotal = price * item.quantity;
      const newTotal = price * quantity;
      
      return {
        items: state.items.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        ),
        total: state.total - oldTotal + newTotal
      };
    });
  },
  
  clearCart: () => {
    set({ items: [], total: 0 });
  },
}));