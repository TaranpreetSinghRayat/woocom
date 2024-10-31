import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { WooProduct } from '../types';
import { fetchProducts } from '../services/api';
import { ShoppingBag } from 'lucide-react';

export const HomeScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<WooProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 justify-center items-center">
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-6 flex-row justify-between items-center">
        <View>
          <Text className="text-3xl font-bold text-gray-900">Store</Text>
          <Text className="text-gray-600 mt-1">Find your perfect items</Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Cart')}
          className="p-2"
        >
          <ShoppingBag size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        className="flex-1 px-2"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => navigation.navigate('ProductDetail', { product })}
            />
          ))}
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};