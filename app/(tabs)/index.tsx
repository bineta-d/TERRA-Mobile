import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import '../../global.css'

export default function index() {
  return (
    <SafeAreaView>
      <Text className='bg-red-500 text-4xl'>Home</Text>
    </SafeAreaView>
  )
}