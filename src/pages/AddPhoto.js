import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddPhoto() {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickCamera = async () => {
    let result = await ImagePicker.launchCameraAsync()

    console.log(result.data);

    if (!result.cancelled) {
      setCamera(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from library" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick an image from camera" onPress={pickCamera} />
      {camera && <Image source={{ uri: camera }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}