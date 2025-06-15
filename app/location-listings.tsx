import { View, Text , SafeAreaView, } from 'react-native'
import React from 'react'
import CustomTabBar from 'components/CustomTabBar';
import { useRouter } from 'expo-router';
import {useLocalSearchParams, Stack} from 'expo-router';
export default function LocationListings() {
    const router = useRouter(); 
    const { title } = useLocalSearchParams();

    return (
      <SafeAreaView className='bg-cream-pastel h-[100%] flex-1'>
       <Stack.Screen
          options={{
            animation: 'slide_from_right', 
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#F5E8D7',
            }, title: "Listings",
            headerBackTitle: 'Back',
          }}
        />
        {/* <BackButton onPress={() => router.back()} /> */}
       
       {/* <View className="items-center mt-4">
       <Text className="text-xl font-bold">Details</Text>
        </View> */}
  
        <CustomTabBar />
  
      </SafeAreaView>
    )
  }