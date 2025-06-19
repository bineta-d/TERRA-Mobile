import { View, Text, TextInput, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function EditPassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="bg-cream-pastel h-full p-5 mx-2 my-4 rounded-xl">
      <Pressable onPress={() => router.back()} className="flex-row items-center mb-5">
        <Ionicons name="arrow-back" size={24} />
        <Text className="ml-3 text-xl font-bold text-dark-brown">Edit Password</Text>
      </Pressable>

      <Text className="text-dark-brown mb-2">New Password</Text>
      <View className="border border-dark-brown rounded-lg p-3 bg-white flex-row items-center">
        <TextInput
          className="flex-1"
          placeholder="Enter new password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} onPress={() => setShowPassword(!showPassword)} />
      </View>

      <Text className="text-dark-brown mt-4 mb-2">Confirm Password</Text>
      <TextInput
        className="border border-dark-brown rounded-lg p-3 bg-white"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Pressable className="bg-dark-brown rounded-lg mt-5 p-3 items-center">
        <Text className="text-white font-bold">Save Changes</Text>
      </Pressable>
    </SafeAreaView>
  );
}
