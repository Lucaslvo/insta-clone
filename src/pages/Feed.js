import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

function Feed({ posts }) {

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          console.log(item)
          return (
            <Post key={item.id} {...item} />

          )
        }}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
})

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

export default connect(mapStateToProps)(Feed)