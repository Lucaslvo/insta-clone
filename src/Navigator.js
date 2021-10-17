import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import Login from './pages/Login'
import Feed from './pages/Feed'
import Camera from './pages/Camera'
import Profile from './pages/Profile'
import { createContext } from 'react';



const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const MyContext = createContext()



export default function Navigator() {

  const [loginComplete, setLoginComplete] = useState(true)

  return (
    <MyContext.Provider value={{ loginComplete, setLoginComplete }}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          {loginComplete ? (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'planet'
                      : 'planet-outline';
                  } else if (route.name === 'Feed') {
                    iconName = focused ? 'at-circle' : 'at-circle-outline';
                  } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
            >
              <Tab.Screen name='Feed' component={Feed} />
              <Tab.Screen name='Camera' component={Camera} />
              <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Auth" component={Feed} />

            </Stack.Navigator>
          )}
        </View>

      </NavigationContainer>
    </MyContext.Provider>



  )
}