import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from './pages/Feed'
import { NavigationContainer } from '@react-navigation/native'



const Tab = createBottomTabNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name='Home' component={Feed} />
        <Tab.Screen name='Profile' component={Feed} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}