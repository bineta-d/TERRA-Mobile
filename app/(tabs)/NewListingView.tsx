import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function NewListingView() {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [priceFCFA, setPriceFCFA] = useState('');
  const [priceUSD, setPriceUSD] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const pickImages = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        setMessage('Sorry, we need camera roll permissions to make this work!');
        setShowMessage(true);
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = result.assets.map(asset => asset.uri);
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  const handleAddListing = () => {
    console.log('New Listing Data:', {
      propertyType,
      location,
      priceFCFA,
      priceUSD,
      beds,
      baths,
      area,
      description,
      images,
    });

    setMessage('Listing Added Successfully!');
    setShowMessage(true);

    setPropertyType('');
    setLocation('');
    setPriceFCFA('');
    setPriceUSD('');
    setBeds('');
    setBaths('');
    setArea('');
    setDescription('');
    setImages([]);
  };

  return (
    <SafeAreaView className='bg-cream-pastel h-[100%] flex-1'>
      <View className="items-center mt-4 px-4">
        {/* Header Section */}
        <View className="flex-row justify-between items-center w-full mb-3">
          <Text className="text-3xl font-bold text-gray-800">Add New Listing</Text>
          <Ionicons name="add-circle-outline" size={30} color="gray" />
        </View>
      </View>

      <ScrollView className="flex-1 px-4  ">
        {/* Property Type Input */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Property Type</Text>
        <TextInput
          className="w-full bg-white border border-[#7058550 rounded-lg p-3 mb-4 text-base text-gray-800"
          placeholder="e.g., Apartment, House, Land"
          value={propertyType}
          onChangeText={setPropertyType}
        />

        {/* Location Input */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Location</Text>
        <TextInput
          className="w-full bg-white border border-[#705855] rounded-lg p-3 mb-4 text-base text-gray-800"
          placeholder="e.g., Yoff Virage, Almadies"
          value={location}
          onChangeText={setLocation}
        />

        {/* Price Inputs */}
        <View className="flex-row justify-between mb-4 space-x-4">
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Price (FCFA)</Text>
            <TextInput
              className="w-full bg-white border border-[#705855 rounded-lg p-3 text-base text-gray-800"
              placeholder="e.g., 400.000"
              keyboardType="numeric"
              value={priceFCFA}
              onChangeText={setPriceFCFA}
            />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Price (USD)</Text>
            <TextInput
              className="w-full bg-white border border-[#705855] rounded-lg p-3 text-base text-gray-800"
              placeholder="e.g., 600"
              keyboardType="numeric"
              value={priceUSD}
              onChangeText={setPriceUSD}
            />
          </View>
        </View>

        {/* Bedrooms, Bathrooms, Area Inputs */}
        <View className="flex-row justify-between mb-4 space-x-2">
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Beds</Text>
            <TextInput
              className="w-full bg-white border border-[#705855] rounded-lg p-3 text-base text-gray-800"
              placeholder="e.g., 2"
              keyboardType="numeric"
              value={beds}
              onChangeText={setBeds}
            />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Baths</Text>
            <TextInput
              className="w-full bg-white border border-[#705855] rounded-lg p-3 text-base text-gray-800"
              placeholder="e.g., 2"
              keyboardType="numeric"
              value={baths}
              onChangeText={setBaths}
            />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Area (m²)</Text>
            <TextInput
              className="w-full bg-white border border-[#705855] rounded-lg p-3 text-base text-gray-800"
              placeholder="e.g., 500"
              keyboardType="numeric"
              value={area}
              onChangeText={setArea}
            />
          </View>
        </View>

        {/* Description Input */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Description</Text>
        <TextInput
          className="w-full bg-white border border-[#705855] rounded-lg p-3 mb-6 text-base text-gray-800"
          placeholder="Enter detailed description of the property..."
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        {/* Image Upload Section */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Property Images</Text>
        <TouchableOpacity
          className="w-full bg-gray-100 border border-dashed border-[#705855] rounded-lg p-4 mb-4 items-center justify-center"
          onPress={pickImages}
        >
          <Ionicons name="camera-outline" size={30} color="gray" />
          <Text className="text-gray-600 mt-2">Upload Images</Text>
        </TouchableOpacity>

        {/* Display Selected Images */}
        <ScrollView horizontal className="mb-2">
          {images.map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              className="w-24 h-24 rounded-lg mr-2 border border-gray-300"
              resizeMode="cover"
            />
          ))}
        </ScrollView>


        {/* Add Listing Button */}
        <TouchableOpacity
          className="bg-brown-pastel rounded-lg p-4 items-center justify-center mb-8"
          onPress={handleAddListing}
        >
          <Text className="text-white text-xl font-bold">Add Listing</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Custom Message Box */}
      {showMessage && (
        <View className="absolute bottom-0 left-0 right-0 p-4 bg-green-500 rounded-t-lg shadow-lg">
          <Text className="text-white text-center text-lg">{message}</Text>
          <TouchableOpacity
            className="absolute top-2 right-2 p-1"
            onPress={() => setShowMessage(false)}
          >
            <Ionicons name="close-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
