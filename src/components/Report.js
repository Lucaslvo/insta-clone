import React from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'

export default function Report(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{props.titulo}</Text>
      <Text>{props.categoria}</Text>
      <Image source={props.image} style={styles.image} />
      {console.log(props)}
      <Text>{props.endereco}</Text>
      <Text>{props.descricao}</Text>


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