import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

export const PrivacyScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        <Text className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</Text>
        
        <Section title="Information We Collect">
          <Text className="text-gray-600 mb-4">
            We collect information you provide directly to us, including name, email address, 
            shipping address, and payment information when you make a purchase.
          </Text>
        </Section>

        <Section title="How We Use Your Information">
          <Text className="text-gray-600 mb-4">
            We use the information we collect to:
          </Text>
          <BulletPoint>Process your orders and payments</BulletPoint>
          <BulletPoint>Send order confirmations and updates</BulletPoint>
          <BulletPoint>Provide customer support</BulletPoint>
          <BulletPoint>Improve our services</BulletPoint>
        </Section>

        <Section title="Information Sharing">
          <Text className="text-gray-600 mb-4">
            We do not sell or share your personal information with third parties except 
            as necessary to provide our services or as required by law.
          </Text>
        </Section>

        <Section title="Data Security">
          <Text className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect 
            your personal information against unauthorized access or disclosure.
          </Text>
        </Section>

        <Section title="Your Rights">
          <Text className="text-gray-600 mb-4">
            You have the right to:
          </Text>
          <BulletPoint>Access your personal data</BulletPoint>
          <BulletPoint>Request corrections to your data</BulletPoint>
          <BulletPoint>Request deletion of your data</BulletPoint>
          <BulletPoint>Opt-out of marketing communications</BulletPoint>
        </Section>

        <Text className="text-gray-500 mt-6 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <View className="mb-6">
    <Text className="text-xl font-semibold text-gray-900 mb-3">{title}</Text>
    {children}
  </View>
);

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View className="flex-row mb-2 ml-4">
    <Text className="text-gray-600 mr-2">•</Text>
    <Text className="text-gray-600 flex-1">{children}</Text>
  </View>
);