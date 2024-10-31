import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Footer = () => {
  const navigation = useNavigation();

  return (
    <View className="px-4 py-6 bg-gray-50 border-t border-gray-200">
      <View className="flex-row justify-center space-x-6">
        <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
          <Text className="text-gray-600">Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
          <Text className="text-gray-600">Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Your Store. All rights reserved.
      </Text>
    </View>
  );
};