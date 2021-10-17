import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput

} from 'react-native'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate('Auth')
  }

  const register = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Email'
        style={styles.input}
        autoFocus={true}
        keyboardType='email-address'
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        placeholder='Senha'
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={register} style={styles.button}>
        <Text style={styles.buttonText}>Criar nova conta</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333'
  }
})

export default Login