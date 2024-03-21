import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Ubicacion = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      // Solicitar permisos de ubicación
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso de ubicación no concedido');
        return;
      }

      // Obtener la ubicación actual del dispositivo
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ubicación del Dispositivo</Text>
      {errorMsg ? (
        <Text style={[styles.errorMsg, styles.text]}>{errorMsg}</Text>
      ) : (
        <MapView style={styles.map} initialRegion={{
          latitude: location?.coords.latitude || 0,
          longitude: location?.coords.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{
              latitude: location?.coords.latitude || 0,
              longitude: location?.coords.longitude || 0,
            }}
            title="Ubicación actual"
            description="Esta es tu ubicación actual"
          />
        </MapView>
      )}
      <Button title="Actualizar Ubicación" onPress={() => setLocation(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  errorMsg: {
    color: 'red',
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});

export default Ubicacion;
