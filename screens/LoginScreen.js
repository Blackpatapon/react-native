import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username.trim() !== '' && password.trim() !== '') {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please enter both username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Steam_Logo.png')} style={styles.logo} />
      <Text style={styles.title}>STEAM</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.switchText}>Registrarse</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  controllerIcon: {
    marginTop: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  switchText: {
    color: 'white',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
