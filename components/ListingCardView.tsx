import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';


type ListingCardViewProps = {
    imageUri: ImageSourcePropType;
    priceFCFA: string;
    priceUSD: string;
    beds: string;
    baths: string;
    area: string;
    location: string;

  };

export default function ListingCardView({
    imageUri,
    priceFCFA,
    priceUSD,
    beds,
    baths,
    area,
    location}:ListingCardViewProps) {

  return (
    <TouchableOpacity
      className="flex-row bg-white rounded-lg shadow-lg mb-4 overflow-hidden border border-[#705855] h-[4%]"
      style={{ elevation: 3 }}
      onPress={() => router.push('/listing-detail-screen')}
    >
      <View className="w-2/4 h-full rounded-l-lg">
        <Image
          source={imageUri}
          className="w-full"
          resizeMode="cover"
          
          
        />
      </View>

      <View className="flex-1 p-4 flex-col justify-between bg-tan-pastel">
        <View className='items-center'>
          <Text className="text-xl font-bold text-gray-800">{priceFCFA}</Text>
          <Text className="text-md text-gray-500 mb-2">{priceUSD}</Text>

          <View className="border-b border-[#705855] my-2" />
          <View className="flex-row items-center space-x-2 mb-2 items-center justify-center">
            <Text className="text-sm text-gray-700">{beds}</Text>
            <Text className="text-sm text-gray-700">|</Text>
            <Text className="text-sm text-gray-700">{baths}</Text>
            <Text className="text-sm text-gray-700">|</Text>
            <Text className="text-sm text-gray-700">{area}</Text>
          </View>
          <Text className=" text-sm text-gray-600 ">{location}</Text>
        </View>

        <TouchableOpacity
          className="absolute bottom-3 right-3 p-2 bg-gray-100 rounded-full"
          
        >
          <Ionicons name="heart-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
