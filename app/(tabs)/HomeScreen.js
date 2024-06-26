import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <StatusBar barStyle={'light-content'}/>
      
    </SafeAreaView>
  )
}

export default HomeScreen