import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Post from './components/Post'

export default function App() {

  const comments = [{
    nickname: 'João da Silva',
    comment: 'Top hein? Curti!'
  }, {
    nickname: 'Nunes Alves',
    comment: 'HAHAHAHAHHAHA!'
  }]
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Post image={require('../assets/o-que-e-paisagem.jpg')} comments={comments} />
    </View>
  );
}

