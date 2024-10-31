import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { WooProduct } from '../types';
import { useCart } from '../store/useCart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: WooProduct;
  onPress: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const { addItem } = useCart();
  const mainImage = product.images[0]?.src || 'https://via.placeholder.com/400';
  const price = product.price || product.regular_price || '0';

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-white rounded-xl shadow-sm overflow-hidden m-2 w-[160px]"
    >
      <Image
        source={{ uri: mainImage }}
        className="w-full h-[160px]"
        resizeMode="cover"
      />
      <View className="p-3">
        <Text className="text-sm font-medium text-gray-900 mb-1" numberOfLines={1}>
          {product.name}
        </Text>
        <Text className="text-lg font-bold text-gray-900">
          ${parseFloat(price).toFixed(2)}
        </Text>
        {product.stock_status === 'instock' && (
          <TouchableOpacity
            onPress={() => addItem(product)}
            className="mt-2 bg-black py-2 rounded-lg flex-row justify-center items-center space-x-2"
          >
            <ShoppingCart size={16} color="white" />
            <Text className="text-white text-center text-sm font-medium">
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
        {product.stock_status !== 'instock' && (
          <Text className="mt-2 text-red-500 text-center text-sm">
            Out of Stock
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};