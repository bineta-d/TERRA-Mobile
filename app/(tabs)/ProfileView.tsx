import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CustomTabBar
 from 'components/CustomTabBar';
export default function ProfileView() {
  const router = useRouter();

  const navigateTo = (screenName) => {
    console.log('Navigating to:', screenName);
    router.push('/'); 
  };

  return (
    <SafeAreaView className='bg-cream-pastel h-[100%] flex-1'>
      <View className="items-center mt-4 px-4">
        {/* Header Section */}
        <View className="flex-row justify-between items-center w-full mb-6">
          <Text className="text-3xl font-bold text-gray-800">Profile</Text>
          <Ionicons name="person-circle-outline" size={30} color="gray" />
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Personal Information Section */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Personal Information</Text>
        <View className="bg-white rounded-lg shadow-md mb-6 border border-[#705855] overflow-hidden">
          <TouchableOpacity
            className="flex-row justify-between items-center p-4 border-b border-dark-brown"
            onPress={() => navigateTo('/edit-name')}
          >
            <Text className="text-base text-gray-800">Name: Ndiassse D.</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row justify-between items-center p-4"
            onPress={() => navigateTo('/edit-phone')}
          >
            <Text className="text-base text-gray-800">Phone: 700-888-4788</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Sign In & Security Section */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Sign In & Security</Text>
        <View className="bg-white rounded-lg shadow-md mb-6 border border-[#705855] overflow-hidden">
          <TouchableOpacity
            className="flex-row justify-between items-center p-4 border-b border-dark-brown"
            onPress={() => navigateTo('/edit-email')}
          >
            <Text className="text-base text-gray-800">Mail: ndiassse.d@gmail.com</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row justify-between items-center p-4"
            onPress={() => navigateTo('/change-password')}
          >
            <Text className="text-base text-gray-800">Password: **********</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Language Section */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Language</Text>
        <View className="bg-white rounded-lg shadow-md mb-6 border border-[#705855] overflow-hidden">
          <TouchableOpacity
            className="flex-row justify-between items-center p-4 border-b border-dark-brown"
            onPress={() => navigateTo('/language-settings')}
          >
            <Text className="text-base text-gray-800">English</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row justify-between items-center p-4"
            onPress={() => navigateTo('/notification-settings')}
          >
            <Text className="text-base text-gray-800">Notifications</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Manage Account Section */}
        <Text className="text-lg font-semibold text-gray-700 mb-2">Manage Account</Text>
        <View className="bg-white rounded-lg shadow-md mb-6 border border-[#705855] overflow-hidden">
          <TouchableOpacity
            className="flex-row justify-between items-center p-4 border-b border-dark-brown"
            onPress={() => navigateTo('/deactivate-account')}
          >
            <Text className="text-base text-red-600">Deactivate or Delete Account</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row justify-between items-center p-4"
            onPress={() => navigateTo('/privacy-cookies')}
          >
            <Text className="text-base text-gray-800">Privacy & Cookies</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity
          className="bg-red-500 rounded-lg p-4 items-center justify-center mb-8  border border-[#705855]"
          onPress={() => {
            console.log('User signed out');
            // clear auth logic
            router.replace('/login'); 
          }}
        >
          <Text className="text-white text-xl font-bold">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>


    </SafeAreaView>
  );
}
