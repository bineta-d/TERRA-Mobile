import { View, Text, SafeAreaView, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DeactivateDelete() {
  const router = useRouter();

  const handleDeactivate = () => {
    Alert.alert("Confirm Deactivation", "Are you sure you want to deactivate your account?", [
      { text: "Cancel", style: "cancel" },
      { text: "Deactivate", onPress: () => console.log("Account deactivated") },
    ]);
  };

  const handleDelete = () => {
    Alert.alert("Confirm Deletion", "This action is irreversible. Do you want to proceed?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete Account", onPress: () => console.log("Account deleted") },
    ]);
  };

  return (
    <SafeAreaView className="bg-cream-pastel h-full p-5 mx-2 my-4 rounded-xl">
      <Pressable onPress={() => router.back()} className="flex-row items-center mb-5">
        <Ionicons name="arrow-back" size={24} />
        <Text className="ml-3 text-xl font-bold text-dark-brown">Deactivate & Delete Account</Text>
      </Pressable>

      <Text className="text-dark-brown mb-4">Choose an option below:</Text>

      <Pressable onPress={handleDeactivate} className="border border-dark-brown rounded-lg p-3 bg-white mb-3">
        <Text className="text-dark-brown text-center">Deactivate Account</Text>
      </Pressable>

      <Pressable onPress={handleDelete} className="bg-red-600 rounded-lg p-3 items-center">
        <Text className="text-white font-bold">Delete Account</Text>
      </Pressable>
    </SafeAreaView>
  );
}
