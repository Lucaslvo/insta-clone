import React from 'react'
import {
  StyleSheet,
  View,
  Platform,
  Image,
  Text
} from 'react-native'
import icon from '../../assets/city-rp.png'

import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'


function Header({ name, email }) {

  const nameUser = name || 'Anonymous'
  const gravatar = email ?
    <Gravatar
      options={{ email: email, secure: true }}
      style={styles.avatar} />
    : null
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.user}>{nameUser}</Text>
        {gravatar}
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 36,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    
  
  },
  title: {
    color: '#000',
    height: 30,
    fontSize: 28
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    fontSize: 10,
    color: '#888'
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10
  }
})

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name
  }
}

export default connect(mapStateToProps)(Header)