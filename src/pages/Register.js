import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,

} from 'react-native'

function Register() {

  const navigation = useNavigation()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='nome'
        autoFocus={true}
        style={styles.input}
        value={name}
        onChangeText={name => setName(name)} />
      <TextInput
        placeholder='email'
        keyboardType='email-address'
        style={styles.input}
        value={email}
        onChangeText={email => setEmail(email)} />
      <TextInput
        placeholder='senha'
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={password => setPassword(password)} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => { }}>
        <Text style={styles.buttonText}>Salvar</Text>

      </TouchableOpacity>

    </View>
  )
}

export default Register

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
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 15
  }
})