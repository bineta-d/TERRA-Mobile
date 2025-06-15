import { View, Text, SafeAreaView , Image, TextInput, ScrollView} from 'react-native'
import React from 'react'
import '../../global.css'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import africa from '../../assets/africa-outline.png'
import { Ionicons } from '@expo/vector-icons';
import LocationCard from 'components/LocationCard';

export default function index() {

  
    const locations = [
      { title: 'Yoff', image: require('../../assets/yoff.jpeg') },
      { title: 'Almadies', image: require('../../assets/almadies.jpg') },
      { title: 'Medina', image: require('../../assets/medina.jpg') },
      { title: 'Parcelles', image: require('../../assets/parcelle.jpg') },
      { title: 'Plateau', image: require('../../assets/plateau.jpg') },
      { title: 'Ngor', image: require('../../assets/ngor.jpeg') },
      { title: 'Pikine', image: require('../../assets/pikine.jpg') },
      { title: 'Fann Point E', image: require('../../assets/fannpointe.jpg') },
      { title: 'Grand Dakar', image: require('../../assets/granddakar.jpg') },
      { title: 'Ouakam', image: require('../../assets/ouakam.png') },
      { title: 'Mermoz-Sacre Coeur', image: require('../../assets/mermoz.jpeg') },
      { title: 'Rufisque', image: require('../../assets/rufisque.jpeg') },
    ];
    

  return (
    <SafeAreaView className='bg-cream-pastel h-[100%]'>
      
      <View className="top-bar d-flex flex-row justify-between px-5 mt-2 ">
        <Text className='text-xl font-bold text-dark-brown text-2xl'>TERRA</Text>
        <Ionicons name='map-outline' size={20}></Ionicons>
      </View>

      <ScrollView>
      {/* search bar */}
      <View className="items-center mt-4">
        <View className='search-bar border flex-row items-center p-3 w-[93%] bg-tan-pastel rounded-xl '>
          <Ionicons name='search-outline' size={20}/>
          <TextInput className="px-3" value='' placeholder='Neighborhood, Feature...' numberOfLines={5}/>
        </View>
      </View>

      {/* Locations  */}
     <View className='explore-section mt-5 mx-5'>
     <Text className='text-xl font-bold text-dark-brown text-2xl'>Explore</Text>
     <ScrollView className='top-carousel' horizontal showsHorizontalScrollIndicator={false} className="mt-3">
        {locations.slice(0,6).map((loc ,index) => (
          <LocationCard key={index} title={loc.title} image={loc.image}/>
        ))}
      </ScrollView >

      <ScrollView className='top-carousel mt-3' horizontal showsHorizontalScrollIndicator={false} className="mt-3">
        {locations.slice(6).map((loc ,index) => (
          <LocationCard key={index} title={loc.title} image={loc.image}/>
        ))}
      </ScrollView >
     </View>

     <View className="border-b border-[#705855] my-2" />

     {/* Map View */}
     <View className='explore-section mt-4 mx-5'>
        <Text className='text-xl font-bold text-dark-brown text-2xl'>Map View</Text>
        <View className='map'>

        </View>
      </View>

     </ScrollView>
    </SafeAreaView>
  )
}