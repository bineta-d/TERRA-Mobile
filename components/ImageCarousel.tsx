import React from 'react';
import { ScrollView, Image, View } from 'react-native';

export default function ImageCarousel({ images }: { images: any[] }) {
  return (
    <View className="w-full h-[250px] rounded-xl overflow-hidden">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className="w-full h-[250px]"
      >
        {images.map((img, idx) => (
          <Image
            key={idx}
            source={img}
            className="w-full h-[250px]"
            resizeMode="cover"
          />
        ))}
      </ScrollView>
    </View>
  );
}
