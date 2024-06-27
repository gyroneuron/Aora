import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {



    const TabIcon = ({color, focused, name, icon}) => {
        return (
            <View className="items-center justify-center">
                <Image 
                    source={icon}
                    resizeMode='contain'
                    tintColor={color}
                    className="h-6 w-6"
                />
                <Text className={`${focused? 'font-psemibold text-secondary-200': 'font-pregular text-gray-400'}`}>
                    {name}
                </Text>
            </View>
        )
    }

  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FF9C01',
            tabBarInactiveTintColor: '#CDCE0',
            tabBarStyle: {
                backgroundColor: '#161622',
                height:'10%'
            }
        }}
    >
        <Tabs.Screen
            name='HomeScreen'
            options={{
                headerShown: false,     
                tabBarIcon: (({focused, color}) => (
                    <TabIcon
                        icon={require('../../assets/svg/icons/home.png')}
                        name={'Home'}
                        color={color}
                        focused={focused}
                    />
                ))
            }}
        />
        <Tabs.Screen
            name='ProfileScreen'
            options={{
                headerShown: false,
                tabBarIcon: (({focused, color}) => (
                    <TabIcon
                        icon={require('../../assets/svg/icons/profile.png')}
                        name={'Profile'}
                        color={color}
                        focused={focused}
                    />
                ))
                
            }}
        />
        <Tabs.Screen
            name='CreateScreen'
            options={{
                headerShown: false,
                tabBarIcon: (({focused, color}) => (
                    <TabIcon
                        icon={require('../../assets/svg/icons/plus.png')}
                        name={'Create'}
                        color={color}
                        focused={focused}
                    />
                ))
            }}
        />
        <Tabs.Screen
            name='SavedScreen'
            options={{
                headerShown: false,
                tabBarIcon: (({focused, color}) => (
                    <TabIcon
                        icon={require('../../assets/svg/icons/bookmark.png')}
                        name={'Saved'}
                        color={color}
                        focused={focused}
                    />
                ))
            }}
        />
    </Tabs>
  )
}

export default _layout