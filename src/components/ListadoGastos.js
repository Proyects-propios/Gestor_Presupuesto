import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Gasto from './Gasto';

const ListadoGastos = ({
  gastos,
  setModal,
  setGastado,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {filtro
        ? gastosFiltrados.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setModal={setModal}
              setGastado={setGastado}
            />
          ))
        : gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setModal={setModal}
              setGastado={setGastado}
            />
          ))}

      {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro)) && (
        <Text style={styles.noGastos}>No hay gastos</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 20,
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
