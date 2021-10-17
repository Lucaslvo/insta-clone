import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { CommonActions } from '@react-navigation/native'

function Profile({ loadingComplete }) {

  const navigation = useNavigation()



  const logout = () => {

    navigation.navigate('Login')
  }



  const options = {
    email: 'obaobauol@uol.br',
    secure: true
  }

  return (
    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>Oba Oba
      </Text>
      <Text style={styles.email}>Oba um e-mail
      </Text>
      <TouchableOpacity
        onPress={logout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sair
        </Text>

      </TouchableOpacity>

    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  avatar:
  {
    width: 150,
    height: 150,
    borderRadius: 57,
    marginTop: 100
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Profile