import React from 'react';
import { View,SafeAreaView, TouchableOpacity , Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BackButton from 'components/BackButton';
import { Stack } from 'expo-router';
import CustomTabBar from 'components/CustomTabBar';

interface Location {
  title: string;
  latitude: number;
  longitude: number;
}

const placeholderLocations: Location[] = [
  { title: 'Placeholder 1', latitude: 14.7167, longitude: -17.4677 },
  { title: 'Placeholder 2', latitude: 14.6928, longitude: -17.4467 },
];

export default function FullMap() {
  const router = useRouter();
  return (
    <SafeAreaView className='bg-cream-pastel h-[100%]'>
      <Stack.Screen
        options={{
          animation: 'slide_from_right', 
          headerShown: true, 
          headerStyle: {
            backgroundColor: '#F5E8D7',
          },
          headerTitle:'Map',
          headerBackTitle:'Back'
        }}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 14.6928,
          longitude: -17.4467,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {placeholderLocations.map((loc, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            title={loc.title}
          />
        ))}
      </MapView>
      <CustomTabBar />

    </SafeAreaView>
  );
}
