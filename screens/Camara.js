import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const Camara = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  const switchCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const closeCamera = () => {
    setCapturedImage(null);
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acceso a la cámara denegado.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Camera App</Text>
      {capturedImage ? (
        <>
          <Image source={{ uri: capturedImage }} style={styles.image} />
          <TouchableOpacity onPress={closeCamera} style={styles.closeButton}>
            <Ionicons name="md-close" size={32} color="white" />
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={takePicture} style={[styles.button, { backgroundColor: 'blue' }]}>
            <Ionicons name="camera" size={64} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={switchCameraType} style={[styles.button, { backgroundColor: 'green' }]}>
            <Ionicons name="camera" size={64} color="white" />
          </TouchableOpacity>
        </View>
      )}
      <Camera ref={cameraRef} style={styles.camera} type={cameraType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    borderRadius: 50,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});

export default Camara;
