import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
// import { MapPinIcon } from 'react-native-heroicons/solid';
import ListingCardView from 'components/ListingCardView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SavedView() {
  const savedListings = [
    {
      id: '1',
      image: require('../../assets/parcelle.jpg') , 
      priceFCFA: '400.000 fcfa',
      priceUSD: '600 USD',
      beds: '2bd',
      baths: '2ba',
      area: '500m',
      location: 'Yoff Virage',
    },
    {
      id: '2',
      image: require('../../assets/medina.jpg') , 
      priceFCFA: '400.000 fcfa',
      priceUSD: '600 USD',
      beds: '2bd',
      baths: '2ba',
      area: '500m',
      location: 'Yoff Virage',
    },
    {
      id: '3',
      image: require('../../assets/pikine.jpg') , 
      priceFCFA: '400.000 fcfa',
      priceUSD: '600 USD',
      beds: '2bd',
      baths: '2ba',
      area: '500m',
      location: 'Yoff Virage',
    },
    {
      id: '4',
      image: require('../../assets/almadies.jpg'), 
      priceFCFA: '400.000 fcfa',
      priceUSD: '600 USD',
      beds: '2bd',
      baths: '2ba',
      area: '500m',
      location: 'Yoff Virage',
    },
    {
      id: '5',
      image: require('../../assets/granddakar.jpg'), 
      priceFCFA: '400.000 fcfa',
      priceUSD: '600 USD',
      beds: '2bd',
      baths: '2ba',
      area: '500m',
      location: 'Yoff Virage',
    },
  ];

  const router = useRouter();
  return (
    <SafeAreaView className='bg-cream-pastel h-[100%]'>
      <View className="items-center mt-4 px-4">
        {/* Header Section */}
        <View className="flex-row justify-between items-center w-full mb-1">
          <Text className="text-3xl font-bold text-gray-800">Saves</Text>
          <Ionicons name="map-outline" size={30} color="gray" onPress={() => router.push('/FullMap')} />
        </View>

        <Text className="text-lg text-gray-600 mb-4 self-start pl-4">
          {savedListings.length} Spaces
        </Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {savedListings.map((listing) => (
          <ListingCardView
            key={listing.id}
            imageUri={listing.image}
            priceFCFA={listing.priceFCFA}
            priceUSD={listing.priceUSD}
            beds={listing.beds}
            baths={listing.baths}
            area={listing.area}
            location={listing.location}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
