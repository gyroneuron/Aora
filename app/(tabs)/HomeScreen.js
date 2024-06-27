import {
  FlatList,
  StatusBar,
  Text,
  View,
  Image,
  Keyboard,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UseGlobalContext } from "../../context/GlobalProvider";
import Logo from "../../assets/svg/images/logo-small.png";
import SearchInput from "../../components/SearchInput";
import EmptyRender from "../../components/EmptyRender";
import { getLatestPosts, getPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import TrendingSection from "../../components/TrendingSection";
// import TrendingCard from "../../components/TrendingCard";

const HomeScreen = () => {

  const { data: posts, refetch } = useAppwrite(getPosts);
  const { data: trendingPosts } = useAppwrite(getLatestPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="flex-1 h-full w-full bg-primary">
      <StatusBar barStyle={"light-content"} />
        
      
        <FlatList
          data={posts}
          keyExtractor={(item) => item.$id}
          renderItem={(
            { item } //Dont forget to use parenthesis bracket in flatlist
          ) => (
              <VideoCard
                title={item.title}
                thumbnail={item.thumbnail}
                video={item.video}
                username={item.users.username}
                avatar={item.users.avatar}
              />
          )}
          ListHeaderComponent={() => (
            <View className="space-y-6 my-6 px-4">
              <View className=" justify-between flex-row items-start mb-6">
                <View>
                  <Text className=" font-pmedium text-sm text-gray-100">
                    Welcome Back
                  </Text>
                  <Text className="text-2xl font-psemibold text-white">
                    GyroNeuron
                  </Text>
                </View>
                <View>
                  <Image
                    source={Logo}
                    resizeMode="contain"
                    className=" h-10 w-10"
                  />
                </View>
              </View>
              <SearchInput placeholder={"Search for a video topic"} />
              <View className="my-3">
                <TrendingSection data={trendingPosts}/>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View className="flex-1 items-center justify-center h-full w-full">
              <EmptyRender
                title={"No Videos Found"}
                subtitle={"Be the first one to upload a video"}
              />
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressBackgroundColor={'#FF8E01'} tintColor={'#FF8E01'} />
          }
        />
    </SafeAreaView>
  );
};

export default HomeScreen;
