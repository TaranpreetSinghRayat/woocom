import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { CartItem } from '../components/CartItem';
import { useCart } from '../store/useCart';

export const CartScreen = () => {
  const { items, total } = useCart();

  if (items.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 justify-center items-center">
        <Text className="text-xl text-gray-600">Your cart is empty</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6">
        <Text className="text-3xl font-bold text-gray-900">Cart</Text>
        <Text className="text-gray-600 mt-1">{items.length} items</Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </ScrollView>

      <View className="p-4 bg-white border-t border-gray-200">
        <View className="flex-row justify-between mb-4">
          <Text className="text-lg text-gray-600">Total</Text>
          <Text className="text-lg font-bold">${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity className="bg-black py-4 rounded-lg">
          <Text className="text-white text-center text-lg font-medium">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};