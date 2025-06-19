import { View, Text, TextInput, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function EditName() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <SafeAreaView className="bg-cream-pastel h-full p-5 mx-2 my-4 rounded-xl">
      <Pressable onPress={() => router.back()} className="flex-row items-center mb-5">
        <Ionicons name="arrow-back" size={24} />
        <Text className="ml-3 text-xl font-bold text-dark-brown">Edit Name</Text>
      </Pressable>

      <Text className="text-dark-brown mb-2">Full Name</Text>
      <TextInput
        className="border border-dark-brown rounded-lg p-3 bg-white"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Pressable className="bg-dark-brown rounded-lg mt-5 p-3 items-center">
        <Text className="text-white font-bold">Save Changes</Text>
      </Pressable>
    </SafeAreaView>
  );
}

