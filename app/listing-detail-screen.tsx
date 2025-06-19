import { View, Text, SafeAreaView, ScrollView, Pressable, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MapCard from 'components/MapCard';
import ImageCarousel from 'components/ImageCarousel';
import React from 'react';

const listing = {
  images: [
    require('../assets/almadies.jpg'),
    require('../assets/apt.jpg'),
    require('../assets/medina.jpg'),
    require('../assets/granddakar.jpg'),
    require('../assets/yoff.jpg'),
  ],
  title: 'Modern Apartment in Almadies',
  price: '450,000 CFA / month',
  location: 'Almadies, Dakar',
  description: 'Spacious 2-bedroom apartment with sea view, close to shops and restaurants. Fully furnished, secure building. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Proin ac neque nec erat cursus posuere. Etiam euismod, justo at facilisis cursus, urna erat dictum enim, at cursus enim erat euismod enim. Vivamus euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.',
  latitude: 14.7401,
  longitude: -17.4943,
  author: {
    name: 'Fatou Ndiaye',
    phone: '+221 77 123 4567',
  },
};

export default function ListingDetailScreen() {
  const router = useRouter();
  const scrollRef = React.useRef<ScrollView>(null);

  const handleMessage = () => {
    router.push('/(tabs)/ChatView?user=' + encodeURIComponent(listing.author.name));
  };

  const handleCall = () => {
    Linking.openURL(`tel:${listing.author.phone}`);
  };

  const handleBackToTop = () => {
    scrollRef?.current?.scrollTo({ y: 0, animated: true });
  };

  const usdRate = 0.0016; 
  const priceCFA = 450000;
  const priceUSD = (priceCFA * usdRate).toFixed(2);

  return (
    <SafeAreaView className="bg-cream-pastel flex-1">
      <ScrollView ref={scrollRef} className="py-4">
        {/* Details Card */}
        <View className="bg-white rounded-2xl shadow-md mb-5 border border-dark-brown p-4 mx-3">
          <Pressable onPress={() => router.back()} className="flex-row items-center mb-3">
            <Ionicons name="arrow-back" size={24} color="#705855" />
            <Text className="ml-2 text-lg font-bold text-dark-brown">Back</Text>
          </Pressable>
          <ImageCarousel images={listing.images} />
          <Text className="text-2xl font-bold text-dark-brown mb-1 mt-3">{listing.title}</Text>
          {/* <Text className="text-lg text-green-700 font-semibold mb-1">{listing.price}</Text> */}

          {/* Price in USD: */}
          <View className="mt-2 mb-1 ">
            <View className="flex-row items-center mb-1">
              <Image source={require('../assets/senegal.png')} className="w-6 h-6 mr-2" />
              <Text className="text-lg text-green-700 font-semibold mb-1">{listing.price}</Text>
            </View>
            <View className="flex-row items-center">
              <Image source={require('../assets/usa.png')} className="w-5 h-5 mr-2" />
              <Text className="text-base text-gray-700 font-semibold">${priceUSD} USD</Text>
            </View>
          </View>
          <View className="flex-row items-center mb-1">
            <Ionicons name="location-outline" size={18} color="#705855" />
            <Text className="ml-1 text-base text-dark-brown">{listing.location}</Text>
          </View>
        </View>

        {/* Description */}
        <View className="bg-white rounded-2xl shadow-md mb-5 border border-dark-brown p-4 mx-3">
          <Text className="text-lg font-bold text-dark-brown mb-2">Description</Text>
          <Text className="text-base text-gray-700">{listing.description}</Text>
        </View>

        {/* Map Section */}
        <View className="bg-white rounded-2xl shadow-md mb-5 border border-dark-brown p-4 mx-3">
          <Text className="text-lg font-bold text-dark-brown mb-2">Location</Text>
          <MapCard latitude={listing.latitude} longitude={listing.longitude} />
       {/*  author */}
       <View className="items-center flex-1 my-5">
            <Text className="text-lg font-bold text-dark-brown mb-1">Listing Author</Text>
            <Text className="text-base text-dark-brown">{listing.author.name}</Text>
            <Text className="text-base text-dark-brown mb-2">{listing.author.phone}</Text>
            <View className="flex-row">
              <Pressable onPress={handleCall} className="bg-green-600 rounded-lg px-4 py-2 mr-2">
                <Text className="text-white font-bold">Call</Text>
              </Pressable>
              <Pressable onPress={handleMessage} className="bg-dark-brown rounded-lg px-4 py-2">
                <Text className="text-white font-bold">Message</Text>
              </Pressable>
            </View>
          </View>
        </View>

      
      </ScrollView>

      {/* Back to Top Button */}
      <Pressable
        onPress={handleBackToTop}
        className="absolute bottom-8 right-6 bg-dark-brown p-3 rounded-full shadow-lg"
        style={{ elevation: 5 }}
      >
        <Ionicons name="arrow-up" size={24} color="#fff" />
      </Pressable>
    </SafeAreaView>
  );
}