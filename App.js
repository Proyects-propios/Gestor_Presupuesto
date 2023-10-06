import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El Presupuesto no puede ser 0 o menor', [
        {text: 'Ok'},
      ]);
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />

        <NuevoPresupuesto handleNuevoPresupuesto={handleNuevoPresupuesto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
  },
});
export default App;
