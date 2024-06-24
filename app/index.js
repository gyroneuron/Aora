import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//Image Imports
import Logo from "../assets/svg/images/logo.png";
import CardImage from "../assets/svg/images/cards.png";
import { images } from "../constants/Colors";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";



const index = () => {
  

  const handleContinue = () => {
    router.navigate("/(auth)/LoginScreen");
  };
  return (
    <SafeAreaView className=" bg-primary flex-1 items-center justify-center">
      <StatusBar hidden/>
      <ScrollView contentContainerStyle={{ height: "100%", width: '90%', flex: 1}}>
        <View
          className="flex-1 items-center justify-center" 
        >
          <Image
            source={Logo}
            className="self-center h-[34px] w-[115px] my-10"
          />
          <Image
            source={CardImage}
            className="self-center h-[350px] w-full my-10"
          />
          <Text className=" font-bold text-white text-3xl text-center">
            Discover Endless {"\n"}
            Possibilities with <Text className="text-secondary">Aora</Text>
          </Text>
          <Image
            source={images.path}
            resizeMode="Contain"
            className=" h-[15px] w-[80px] absolute bottom-[215px] right-[45px]"
          />
          <Text className=" text-base text-center font-pregular mt-7 text-gray-100">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            name={"Continue with Email"}
            textstyle={"font-pbold"}
            handlePress={handleContinue}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
