import React from 'react'
import {
  StyleSheet,
  View,
  Platform,
  Image,
  Text
} from 'react-native'
import icon from '../../assets/icon.png'

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: '#000',
    height: 30,
    fontSize: 28
  }
})

export default Header