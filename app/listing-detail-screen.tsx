import { View, Text,SafeAreaView } from 'react-native'
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import BackButton from 'components/BackButton';
import CustomTabBar from 'components/CustomTabBar';
import { useRouter } from 'expo-router';

export default function ListingDetailScreen() {
  const router = useRouter(); 
  return (
    <SafeAreaView className='bg-cream-pastel h-[100%] flex-1'>
     <Stack.Screen
        options={{
          animation: 'slide_from_right', 
          headerShown: true, 
          headerStyle: {
            backgroundColor: '#F5E8D7',
          }, title: "Details",
          headerBackTitle: 'Back',
        }}
      />
     

      <CustomTabBar />

    </SafeAreaView>
  )
}