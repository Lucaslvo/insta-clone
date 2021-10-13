import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

function Feed(props) {
  const posts = [
    {
      id: Math.random(),
      nickname: 'Rafa zika',
      email: 'rafaelprr@policia.gov.sp',
      image: require('../../assets/fruits.jpg'),
      comments: [
        {
          nickname: 'Matador de galinha',
          comment: 'Delicioso, não tanto quanto galinhas.'
        },
        {
          nickname: 'Luisa Sonsa',
          comment: 'Só minha cara é de sonsa ok?',
        }]
    },
    {
      id: Math.random(),
      nickname: 'Natanael Bom Corte',
      email: 'natanqintana.ulala@gmail.com',
      image: require('../../assets/doidao.jpg'),
      comments: [
        {
          nickname: 'Matador de galinha',
          comment: 'Delicioso, não tanto quanto galinhas.'
        },
        {
          nickname: 'Luisa Sonsa',
          comment: 'Só minha cara é de sonsa ok?',
        }]
    },
    {
      id: Math.random(),
      nickname: 'Bufalo Bill',
      email: 'bufalobufalobufalobill@bufalobill.bilbil',
      image: require('../../assets/usa_hawk.jpg'),
      comments: [
        {
          nickname: 'Matador de galinha',
          comment: 'Delicioso, não tanto quanto galinhas.'
        },
        {
          nickname: 'Luisa Sonsa',
          comment: 'Só minha cara é de sonsa ok?',
        }]
    }
  ]

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) =>
          <Post key={item.id} {...item} />} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default Feed