import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

export const TermsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        <Text className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</Text>
        
        <Section title="Acceptance of Terms">
          <Text className="text-gray-600 mb-4">
            By accessing and using this application, you accept and agree to be bound by the 
            terms and conditions outlined here.
          </Text>
        </Section>

        <Section title="Use License">
          <Text className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the application for 
            personal, non-commercial transitory viewing only.
          </Text>
          <Text className="text-gray-600 mb-4">
            This is the grant of a license, not a transfer of title, and under this license 
            you may not:
          </Text>
          <BulletPoint>Modify or copy the materials</BulletPoint>
          <BulletPoint>Use the materials for any commercial purpose</BulletPoint>
          <BulletPoint>Transfer the materials to another person</BulletPoint>
        </Section>

        <Section title="Disclaimer">
          <Text className="text-gray-600 mb-4">
            The materials within this application are provided on an 'as is' basis. We make no 
            warranties, expressed or implied, and hereby disclaim and negate all other warranties 
            including, without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property.
          </Text>
        </Section>

        <Section title="Limitations">
          <Text className="text-gray-600 mb-4">
            In no event shall we or our suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on our application.
          </Text>
        </Section>

        <Section title="Governing Law">
          <Text className="text-gray-600 mb-4">
            These terms and conditions are governed by and construed in accordance with the 
            laws, and you irrevocably submit to the exclusive jurisdiction of the courts 
            in that location.
          </Text>
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