import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { router } from 'expo-router';


type LocationCardProps = {
    title: string;
    image: any; 
}

export default function LocationCard({ title, image }:LocationCardProps) {
  return (
    <TouchableOpacity 
    className='mt-0 m-3 border border-[#705855] rounded-xl w-40 h-40 min-w-40'
    onPress={()=> router.push({pathname: '/location-listings',  params: { title}} )}
   >
     <Image source={image} className="absolute w-full h-full  absolute rounded-xl" resizeMode="cover" />

     {/*  Overlay */}
     <View className="absolute inset-0 bg-black opacity-25" />
      <View className="flex-1 bg-opacity-30  justify-center p-2 items-center">
        <Text className="text-white font-bold text-lg text-center text-2xl">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}