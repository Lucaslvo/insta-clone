import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'



import Login from './Login'
import Register from './Register'

const Stack = createStackNavigator()

function LoginScreen() {


  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: false
      }}
    >
      <Stack.Screen name='LoginUser' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}




export default LoginScreen