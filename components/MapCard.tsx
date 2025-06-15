import React from 'react';
import { TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { useRouter } from 'expo-router';

interface Location {
  title: string;
  latitude: number;
  longitude: number;
}

const placeholderLocations: Location[] = [
  { title: 'Placeholder 1', latitude: 14.7167, longitude: -17.4677 },
  { title: 'Placeholder 2', latitude: 14.6928, longitude: -17.4467 },
];

export default function MapCard() {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="rounded-2xl overflow-hidden h-48 w-[95%] self-center my-1 border border-[#705855]"
      onPress={() => router.push('FullMap')}
    >
      <MapView
        initialRegion={{
          latitude: 14.6928,
          longitude: -17.4467,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={{ width: '100%', height: '100%' }}
        scrollEnabled={false}
        zoomEnabled={false}
        pointerEvents="none"
      >
        {placeholderLocations.map((loc, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            title={loc.title}
          />
        ))}
      </MapView>
    </TouchableOpacity>
  );
}
