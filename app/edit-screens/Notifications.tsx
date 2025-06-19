import { View, Text, SafeAreaView, Switch, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Notifications() {
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);

  return (
    <SafeAreaView className="bg-cream-pastel h-full p-5 mx-2 my-4 rounded-xl">
      <Pressable onPress={() => router.back()} className="flex-row items-center mb-5">
        <Ionicons name="arrow-back" size={24} />
        <Text className="ml-3 text-xl font-bold text-dark-brown">Notifications</Text>
      </Pressable>

      <View className="flex-row items-center justify-between border border-dark-brown rounded-lg p-3 bg-white">
        <Text className="text-dark-brown">Enable Notifications</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
    </SafeAreaView>
  );
}
