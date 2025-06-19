import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Language() {
  const router = useRouter();
  const languages = ['English', 'French', 'Spanish', 'Arabic'];

  return (
    <SafeAreaView className="bg-cream-pastel h-full p-5 mx-2 my-4 rounded-xl">
      <Pressable onPress={() => router.back()} className="flex-row items-center mb-5">
        <Ionicons name="arrow-back" size={24} />
        <Text className="ml-3 text-xl font-bold text-dark-brown">Language</Text>
      </Pressable>

      {languages.map((lang, index) => (
        <Pressable key={index} className="border border-dark-brown rounded-lg p-3 bg-white mb-3">
          <Text className="text-dark-brown">{lang}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}
