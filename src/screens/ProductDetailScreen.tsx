import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useCart } from '../store/useCart';
import { WooProduct } from '../types';
import { ShoppingCart, ChevronLeft } from 'lucide-react';

interface ProductDetailScreenProps {
  route: {
    params: {
      product: WooProduct;
    };
  };
  navigation: any;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route, navigation }) => {
  const { product } = route.params;
  const { addItem } = useCart();
  const mainImage = product.images[0]?.src || 'https://via.placeholder.com/400';
  const price = product.price || product.regular_price || '0';

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 flex-row items-center">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="p-2"
        >
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Image
          source={{ uri: mainImage }}
          className="w-full h-[400px]"
          resizeMode="cover"
        />
        <View className="p-4">
          <Text className="text-2xl font-bold text-gray-900">{product.name}</Text>
          <Text className="text-2xl font-bold text-gray-900 mt-2">
            ${parseFloat(price).toFixed(2)}
          </Text>
          
          {product.attributes.length > 0 && (
            <View className="mt-4">
              {product.attributes.map((attr) => (
                <View key={attr.id} className="mb-3">
                  <Text className="font-medium text-gray-900">{attr.name}</Text>
                  <View className="flex-row flex-wrap mt-2">
                    {attr.options.map((option) => (
                      <View key={option} className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                        <Text>{option}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          )}

          <Text className="text-gray-600 mt-4 text-base leading-6"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </View>
      </ScrollView>
      
      <View className="p-4 border-t border-gray-200">
        {product.stock_status === 'instock' ? (
          <TouchableOpacity
            onPress={() => addItem(product)}
            className="bg-black py-4 rounded-lg flex-row justify-center items-center space-x-2"
          >
            <ShoppingCart size={20} color="white" />
            <Text className="text-white text-center text-lg font-medium">
              Add to Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="bg-gray-200 py-4 rounded-lg">
            <Text className="text-gray-600 text-center text-lg font-medium">
              Out of Stock
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};