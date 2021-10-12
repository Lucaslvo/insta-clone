import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import Author from './Author'


function Post(props) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Author email='hey.wendel95@gmail.com' nickname='Fulano de tal' />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain'
  }
})

export default Post