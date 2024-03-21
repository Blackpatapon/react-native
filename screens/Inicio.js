import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Inicio = ({ navigation }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        navigation.navigate('Login');
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('username');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Steam_Logo.png')} style={styles.logo} />
      <Image source={require('../assets/background.jpeg')} style={styles.otraImagen} />
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      <Button title="Logout" onPress={handleLogout} color="purple" />

      {/* Additional Icons */}
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
  welcomeText: {
    fontSize: 20,
    color: 'white',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  otraImagen: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
});

export default Inicio;
