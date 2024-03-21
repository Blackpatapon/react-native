import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Grafica = () => {
  // Fictitious data for video games
  const gameData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fechas de Actividad</Text>

      {/* Chart */}
      <LineChart
        data={gameData}
        width={300}
        height={200}
        yAxisSuffix="h"
        chartConfig={{
          backgroundGradientFrom: '#1E1E1E',
          backgroundGradientTo: '#1E1E1E',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.chart}
      />
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
  },
  chart: {
    marginVertical: 16,
    borderRadius: 16,
  },
});

export default Grafica;
