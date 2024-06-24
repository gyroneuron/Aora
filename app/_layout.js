import { StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import { Slot, Stack, SplashScreen } from 'expo-router'
import { useFonts } from "expo-font";



SplashScreen.preventAutoHideAsync()

const AuthLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/svg/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("../assets/svg/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/svg/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/svg/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/svg/fonts/Poppins-Regular.ttf")
  });

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(auth)"/>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})