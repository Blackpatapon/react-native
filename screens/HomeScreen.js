import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import Inicio from './Inicio';
import Grafica from './Grafica';
import Ubicacion from './Ubicacion';
import Camara from './Camara';

const BottomTabNavigator = createBottomTabNavigator();

const HomeScreenWithTabs = () => {
  return (
    <BottomTabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTabNavigator.Screen
        name="INICIO"
        component={Inicio}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Actividad"
        component={Grafica}
        options={{
          tabBarLabel: 'Actividad',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bar-chart" size={size} color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Ubicacion"
        component={Ubicacion}
        options={{
          tabBarLabel: 'Ubicacion',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map" size={size} color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Camara"
        component={Camara}
        options={{
          tabBarLabel: 'Camara',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="camera" size={size} color={color} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default HomeScreenWithTabs;
