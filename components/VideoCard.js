import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "../assets/svg/icons/menu.png";
import PlayIcon from "../assets/svg/icons/play.png";

const VideoCard = ({ title, thumbnail, avatar, video, username }) => {
  const [play, setPlay] = useState(false);

  return (
    <View className=" h-[265] w-[90%] self-center items-center justify-start my-10">
      <View className="w-full h-[20%] flex-row items-center my-2">
        <View className="h-full w-[12%] items-center justify-center">
          <View className="border-secondary-100 border-2 h-11 w-11 rounded-lg p-1">
            <Image
              source={{ uri: avatar }}
              resizeMode="contain"
              className="h-full w-full rounded-sm"
            />
          </View>
        </View>
        <View className=" h-full w-[80%] p-2 m-1 flex-[2]">
          <Text className=" text-white font-pmedium text-sm ">{title}</Text>
          <Text className="text-gray-100 font-pregular text-xs">
            {username}
          </Text>
        </View>
        <View className="p-1 w-[8%]">
          <Image source={Icon} resizeMode="contain" className="h-5 w-5" />
        </View>
      </View>
      {play ? (
        <Text>Playing</Text>
      ) : (
        <TouchableOpacity activeOpacity={0.7} onPress={() => setPlay(true)} className="h-full w-full rounded-xl items-center justify-center">
          <Image
            source={{ uri: thumbnail }}
            resizeMode="cover"
            className="h-full w-full rounded-xl"
          />
          <Image
            source={PlayIcon}
            resizeMode="cover"
            className=" self-center h-12 w-12 absolute"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
