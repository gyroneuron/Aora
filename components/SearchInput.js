import { View, Text, TextInput, TouchableOpacity, Image, Keyboard } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const SearchInput = ({title, placeholder, value, handleChangeText}) => {

  const [search, setSearch] = useState("");
  
  return (
    <>
      <View className="rounded-2xl border-2 flex-row border-black-100 bg-black-100 h-16 w-full items-center justify-evenly focus:border-secondary">
        <TextInput
          className="w-[90%] h-full text-base px-4 text-white"
          value={search}
          placeholder={placeholder}
          placeholderTextColor={'#7b7b8b'}
          onChangeText={(text) => {setSearch(text)}}
          keyboardType="default"
          cursorColor={"#FF8E01"}
        />
        {!search ? (
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Image
              source={require("../assets/svg/icons/search.png")}
              className=" h-5 w-5"
              tintColor={'#FF9C01'}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {
            Keyboard.dismiss()
            setSearch('')
          }}>
            <Entypo size={24} name="cross" color={'#FF9C01'}/>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default SearchInput;
