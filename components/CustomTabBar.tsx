import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: 'home-outline', label: 'Home', route: '/' },
    { name: 'heart-outline', label: 'Saved', route: '/SavedView' },
    { name: 'add-circle-outline', label: 'Add', route: '/NewListingView' },
    { name: 'chatbubble-outline', label: 'Messages', route: '/ChatView' },
    { name: 'person-circle-outline', label: 'Profile', route: '/ProfileView' },
  ];

  return (
    <View className="absolute bottom-0 left-0 right-0 h-[83px] flex-row pt-3 items-start justify-around border- border-neutral-300 bg-[#F5E8D7] z-50">
      {tabs.map(({ name, label, route }) => {
        const isActive = pathname === route;

        return (
          <TouchableOpacity
            key={route}
            onPress={() => router.push(route)}
            className="items-center justify-center flex-1"
          >
            <Ionicons
              name={name}
              size={24}
              color={isActive ? 'black' : 'gray'}
            />
            <Text className={`text-xs mt-1 ${isActive ? 'text-black font-semibold' : 'text-gray-500'}`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
