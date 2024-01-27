// App.js
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Menu from './Menu';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuSelect = (option) => {
    setSelectedOption(option);
  };

  const opcionesMenu = ['Inicio', 'Perfil', 'Configuración', 'Cerrar Sesión'];

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 10 }}>
        Menú Seleccionado: {selectedOption}
      </Text>
      <Menu opciones={opcionesMenu} onSelect={handleMenuSelect} />
    </View>
  );
};

export default App;
