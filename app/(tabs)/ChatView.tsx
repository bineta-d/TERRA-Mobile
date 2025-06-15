import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ChatView() {
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  return (
    <SafeAreaView className='bg-cream-pastel h-[100%] flex-1'>
      <View className="items-center mt-4 px-4">
        {/* Header Section */}
        <View className="flex-row justify-between items-center w-full mb-6">
          <Text className="text-3xl font-bold text-gray-800">Messages</Text>
          <Ionicons name="person-circle-outline" size={30} color="gray" />
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        {messages.length === 0 ? (
          <View className="flex-1 justify-center items-center p-8">
            <Ionicons name="chatbox-outline" size={80} color="gray" className="mb-4" />
            <Text className="text-xl text-gray-600 text-center mb-6">
              No messages yet. Start a conversation!
            </Text>
            <TouchableOpacity
              className="bg-brown-pastel rounded-lg p-4 items-center justify-center w-3/4"
              onPress={() => router.push('/')}
            >
              <Text className="text-white text-lg font-bold">Go to Home</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text className="text-lg text-gray-600 mb-4 self-start pl-4">
              {messages.length} Unread Messages
            </Text>
            {messages.map((msg, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white rounded-lg shadow-sm mb-3 p-4 border border-gray-200"
              >
                <Text className="text-lg font-semibold text-gray-800">{msg.sender}</Text>
                <Text className="text-sm text-gray-600 mt-1">{msg.lastMessage}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Placeholder for the custom tab bar */}
    </SafeAreaView>
  );
}
