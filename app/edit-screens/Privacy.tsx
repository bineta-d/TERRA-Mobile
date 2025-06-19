import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Privacy() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-cream-pastel h-full p-5 mx-2 my-4 rounded-xl">
      <Pressable onPress={() => router.back()} className="flex-row items-center mb-5">
        <Ionicons name="arrow-back" size={24} />
        <Text className="ml-3 text-xl font-bold text-dark-brown">Privacy & Cookies</Text>
      </Pressable>

      <Text className="text-dark-brown">Your data is secure. Read our privacy policy for more details.</Text>
    </SafeAreaView>
  );
}
