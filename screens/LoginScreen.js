// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome } from '@expo/vector-icons';

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
      <Text style={styles.title}>Steam Login</Text>
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
      {/* Change the text color of the button to purple */}
      <Button title="Login" onPress={handleLogin} color="purple" />
      <FontAwesome name="gamepad" size={50} color="white" style={styles.controllerIcon} />
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
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  controllerIcon: {
    marginTop: 20,
  },
});

export default LoginScreen;
