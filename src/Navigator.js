import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { connect } from 'react-redux'

import LoginScreen from './pages/LoginScreen'
import Report from './pages/Report'
import Feed from './pages/Feed'
import Camera from './pages/Camera'
import Profile from './pages/Profile'
import { createContext } from 'react';
import Register from './pages/Register';



const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const MyContext = createContext()



function Navigator({ email }) {

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Camera') {
                iconName = focused
                  ? 'ios-camera'
                  : 'ios-camera-outline';
              } else if (route.name === 'Feed') {
                iconName = focused ? 'at-circle' : 'at-circle-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              } else if (route.name === 'Login') {
                iconName = focused ? 'ios-log-in' : 'ios-log-in-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          {email ? (
            <>
              <Tab.Screen name='Feed' component={Feed} />
              <Tab.Screen name='Camera' component={Camera} />
              <Tab.Screen name='Profile' component={Profile} />
            </>
          ) : (
            <>
              <Tab.Screen name='Feed' component={Feed} />
              <Tab.Screen name='Login' component={LoginScreen} />
              <Tab.Screen name='Report' component={Report} />
            </>
          )}


        </Tab.Navigator>

      </View>

    </NavigationContainer >
  )
}

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,

  }
}

export default connect(mapStateToProps, null)(Navigator)