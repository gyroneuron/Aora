import { View, Text, Image} from 'react-native'
import React from 'react'
import NoVideo from '../assets/svg/images/empty.png'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyRender = ({title, subtitle}) => {

    const handleCreate = () => {
        router.navigate('/CreateScreen');
    }

  return (
    <>
        <View className="items-center justify-center w-[90%] h-full">
            <Image source={NoVideo} resizeMode='contain' className="h-[215] w-[270]"/>
            <Text className=" font-psemibold text-xl text-white">{title}</Text>
            <Text className=" font-pmedium text-sm text-gray-100">{subtitle}</Text>

            <CustomButton name={'Create Video'} handlePress={handleCreate} textstyle={'font-pbold'}/>
        </View>
    
    </>
  )
}

export default EmptyRender