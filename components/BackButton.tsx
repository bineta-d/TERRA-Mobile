import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


type BackButtonProps = {
  onPress?: () => void;
};

export default function BackButton({ onPress }: BackButtonProps) {
    const router = useRouter(); 
  return (
    <View>
    <TouchableOpacity 
    className='absolute top-4 left-4 z-50 p-2 my-2 mx-5 flex-row items-center gap-2' 
    onPress={(() => router.back())}
   >
      <Ionicons name='arrow-back' size={20}/>
      <Text className='text-2xl '>Back</Text>
    </TouchableOpacity>
  </View>
  )
}