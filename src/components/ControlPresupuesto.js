import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from './../styles/index';
import {formatearCantidad} from './../helpers/index';
import ProgressCircle from 'react-native-progress-circle-2023';

const ControlPresupuesto = ({presupuesto, gastos, resetearApp}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0,
    );
    const totalDiponible = presupuesto - totalGastado;

    const nuevoPorcentaje = Math.floor(
      ((presupuesto - totalDiponible) / presupuesto) * 100,
    );

    setPorcentaje(nuevoPorcentaje);

    setGastado(totalGastado);
    setDisponible(totalDiponible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gastos]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafico}>
        <ProgressCircle
          percent={porcentaje}
          radius={120}
          borderWidth={25}
          color="#3399FF"
          shadowColor="#E2E2E2"
          bgColor="#fff">
          <Text style={styles.porcentajeCircle}>{porcentaje}%</Text>
          <Text style={styles.textPorcentaje}>Gastado</Text>
        </ProgressCircle>
      </View>

      <View style={styles.contenedorTexto}>
        <Pressable style={styles.boton} onPress={resetearApp}>
          <Text style={styles.textoBoton}>Reiniciar App</Text>
        </Pressable>

        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: {''}</Text>
          {formatearCantidad(presupuesto)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {''}</Text>
          {formatearCantidad(disponible)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {''}</Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  centrarGrafico: {
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#DB2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
  },
  textoBoton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contenedorTexto: {
    marginTop: 30,
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 7,
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6',
  },
  porcentajeCircle: {
    fontSize: 60,
    color: '#3B82f6',
    fontWeight: '700',
  },
  textPorcentaje: {
    color: '#3B82F6',
    fontSize: 20,
    fontWeight: '700',
  },
});
export default ControlPresupuesto;
