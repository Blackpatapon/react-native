import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      try {
        await axios.post('http://172.20.40.56:3000/Register', {
          username: username,
          email: email,
          password: password
        });
        // navigation.navigate('Home');
      } catch (error) {
        console.log(error);
        Alert.alert('Error', 'Error al registrar el usuario. Por favor, inténtelo de nuevo.');
      }
    } else {
      Alert.alert('Error', 'Por favor ingrese nombre de usuario, correo electrónico y contraseña.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Steam_Logo.png')} style={styles.logo} />
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.switchText}>Iniciar sesión</Text>
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
  registerButton: {
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
  switchText: {
    color: 'white',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
