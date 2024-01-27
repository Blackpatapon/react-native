// Menu.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Menu = ({ opciones, onSelect }) => {
  const menuItems = [
    {
      nombre: 'Inicio',
      icono: require('./assets/home.png'),
      descripcion: 'Explora el mundo de los videojuegos desde la comodidad de tu hogar.',
      imagen: require('./assets/images.jpeg'),
      reseña: '¡Bienvenido al emocionante mundo de los videojuegos! Disfruta de la mejor experiencia de juego en línea y descubre títulos increíbles.',
    },
    {
      nombre: 'Perfil',
      icono: require('./assets/home.png'),
      descripcion: 'Administra tu perfil de jugador y mantén un historial de tus logros y juegos favoritos.',
      imagen: require('./assets/images.jpeg'),
      reseña: 'Personaliza tu perfil, conecta con amigos y comparte tus momentos épicos de juego. ¡Demuestra quién es el verdadero héroe!',
    },
    {
      nombre: 'Configuración',
      icono: require('./assets/home.png'),
      descripcion: 'Ajusta las configuraciones según tus preferencias y optimiza tu experiencia de juego.',
      imagen: require('./assets/images.jpeg'),
      reseña: 'Configura tus preferencias de juego, ajusta los controles y mejora tu rendimiento. ¡Personaliza tu experiencia de juego como nunca antes!',
    },
    {
      nombre: 'Cerrar Sesión',
      icono: require('./assets/home.png'),
      descripcion: 'Cierra sesión para garantizar la seguridad de tu cuenta y disfruta de un merecido descanso.',
      imagen: require('./assets/images.jpeg'),
      reseña: '¿Listo para desconectar? Cierra sesión y prepárate para nuevas aventuras. ¡Hasta la próxima!',
    },
  ];

  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => onSelect(item.nombre)}
        >
          <Image source={item.icono} style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>{item.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuItemIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  menuItemText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Menu;
