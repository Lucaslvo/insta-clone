import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Post from './components/Post'
import Feed from './pages/Feed';

export default function App() {


  return (

    <Feed />
    // <View style={{ flex: 1 }}>
    //   <Header />
    //   <Post image={require('../assets/o-que-e-paisagem.jpg')} comments={comments} />
    // </View>
  );
}

