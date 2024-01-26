import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>BIENVENIDO</Text>
    <Button
      title="Ver lista de productos"
      onPress={() => navigation.navigate('Details')}
      color="#800080"
    />
  </View>
);

const ProductsList = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Details Screen</Text>
    <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Details')}
      color="#800080"
    />
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={ProductsList} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
