import { View, Text,SafeAreaView } from 'react-native'
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';


export default function welcome() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/'); 
    }, 200); 

    return () => clearTimeout(timeout);
  }, []);


  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to TERRA</Text>
      </View>
      
    </SafeAreaView>
  )
}