import React, { useState } from 'react'
import { Camera } from 'expo-camera'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, Alert } from 'react-native'



export default function CameraScreen() {

  const [startCamera, setStartCamera] = useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [flashMode, setFlashMode] = useState('off')
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

  let camera: Camera

  const displayCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync()
    if (status === 'granted') {
      setStartCamera(true)
    }
    else {
      Alert.alert('Permissão negada!')
    }
  }

  const takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  const retakePicture = async () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    displayCamera()

  }

  const savePhoto = async () => {

  }

  const handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }
  }

  const switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

  const CameraPreview = ({ photo }: any) => {
    console.log('sdsds', photo)
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              padding: 15,
              justifyContent: 'flex-end'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={retakePicture}
                style={{
                  width: 130,
                  height: 40,
                  alignItems: 'center',
                  borderRadius: 4
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20
                  }}
                >Re-take
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={savePhoto}
                style={{
                  width: 130,
                  height: 40,
                  alignItems: 'center',
                  borderRadius: 4
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20
                  }}
                >
                  Save photo
                </Text>

              </TouchableOpacity>


            </View>

          </View>
        </ImageBackground>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {startCamera ? (
        <View
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          {previewVisible && capturedImage ? (
            <CameraPreview
              savePhoto={savePhoto}
              retakePicture={retakePicture}
              photo={capturedImage} />
          ) : (<Camera
            type={cameraType}
            flashMode={flashMode}
            style={{ flex: 1 }}
            ref={(r) => { camera = r }} >
            <View
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  left: '5%',
                  top: '10%',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <TouchableOpacity
                  onPress={handleFlashMode}
                  style={{
                    backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                    borderRadius: 15,
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25
                    }}
                  >
                    ⚡️
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={switchCamera}
                  style={{
                    marginTop: 20,
                    marginLeft: 4,
                    borderRadius: 15,
                    height: 40,
                    width: 40
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25
                    }}
                  >
                    {cameraType === 'front' ? '🤳' : '📷'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  flexDirection: 'row',
                  flex: 1,
                  width: '100%',
                  padding: 20,
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    alignSelf: 'center',
                    flex: 1,
                    alignItems: 'center'
                  }}
                >
                  <TouchableOpacity
                    onPress={takePicture}
                    style={{
                      width: 70,
                      height: 70,
                      bottom: 0,
                      borderRadius: 50,
                      backgroundColor: '#fff'
                    }} />
                </View>

              </View>
            </View>
          </Camera>)}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={displayCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Take a picture
          </Text>

          </TouchableOpacity>


        </View>
      )}

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})