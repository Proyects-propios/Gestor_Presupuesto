import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Gasto from './Gasto';

const ListadoGastos = ({gastos, setModal, setGastado}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {gastos.length === 0 ? (
        <Text style={styles.noGastos}>No hay gastos pendientes</Text>
      ) : (
        gastos.map(gasto => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setModal={setModal}
            setGastado={setGastado}
          />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 70,
    marginBottom: 100,
  },
  titulo: {
    color: '#64748B',
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '700',
  },
  noGastos: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
});

export default ListadoGastos;
