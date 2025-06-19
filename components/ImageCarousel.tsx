import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import ionicons from '@expo/vector-icons';
const { width } = Dimensions.get('window');

const images = [
  require('../assets/parcelle.jpg'),
  require('../assets/medina.jpg'),
  require('../assets/pikine.jpg'),
];

export default function ImageCarousel() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
    >
      {images.map((img, idx) => (
        <Image key={idx} source={img} style={styles.image} />
        <Ionicons name="arrow-left" size={30} color="blacks"
        className="absolute top-1/2 left-4 transform -translate-y-1/2"  
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width,
    height: 250,
  },
  image: {
    width,
    height: 250,
    resizeMode: 'cover',
  },
});
