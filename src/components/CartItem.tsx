import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../store/useCart';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <View className="flex-row bg-white p-4 rounded-lg mb-3 shadow-sm">
      <Image
        source={{ uri: item.product.image }}
        className="w-20 h-20 rounded-md"
        resizeMode="cover"
      />
      <View className="flex-1 ml-4">
        <Text className="text-lg font-medium text-gray-900" numberOfLines={1}>
          {item.product.name}
        </Text>
        <Text className="text-lg font-bold text-gray-900">
          ${(item.product.price * item.quantity).toFixed(2)}
        </Text>
        <View className="flex-row items-center mt-2">
          <TouchableOpacity
            onPress={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
            className="p-1"
          >
            <Minus size={20} color="#000" />
          </TouchableOpacity>
          <Text className="mx-4 text-lg">{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="p-1"
          >
            <Plus size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => removeItem(item.product.id)}
            className="ml-auto p-1"
          >
            <Trash2 size={20} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};