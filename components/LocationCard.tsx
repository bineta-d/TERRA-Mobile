import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'


type LocationCardProps = {
    title: string;
    image: any; 
}

export default function LocationCard({ title, image }:LocationCardProps) {
  return (
    <TouchableOpacity className='mt-0 m-3 border border-[#705855] rounded-xl w-40 h-40 min-w-40'>
     <Image source={image} className="w-full h-full absolute rounded-xl" resizeMode="cover" />
      <View className="flex-1 bg-r bg-opacity-40  justify-center p-2 items-center">
        <Text className="text-white font-bold text-lg text-center text-2xl">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}