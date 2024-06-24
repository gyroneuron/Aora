import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const CustomButton = ({name, textstyle, isLoading, handlePress}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        className={`w-full min-h-[62px] rounded-2xl my-10 bg-secondary items-center justify-center ${ isLoading ? 'opacity-50' : 'opacity-100'}`}
      >
        <Text className={`text-center ${textstyle}`}>
            {name}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})