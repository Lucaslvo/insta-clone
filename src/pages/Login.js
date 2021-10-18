import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput

} from 'react-native'

import { useNavigation } from '@react-navigation/core'


import { connect } from 'react-redux'
import { login } from '../store/actions/user'

function Login({ onLogin }) {

  const [name, setName] = useState('Temporário')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const login = () => {
    onLogin({ name, email, password })
    console.log(onLogin({ name, email, password }))
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

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(Login)

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