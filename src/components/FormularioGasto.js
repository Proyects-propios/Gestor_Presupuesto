import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import globalStyles from './../styles/index';

const FormularioGasto = ({
  setModal,
  handleGasto,
  gastado,
  setGastado,
  eliminarGasto,
}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if (gastado?.nombre) {
      setNombre(gastado.nombre);
      setCantidad(gastado.cantidad);
      setCategoria(gastado.categoria);
      setId(gastado.id);
      setFecha(gastado.fecha);
    }
  }, [gastado]);

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.contenedorBotones}>
        <Pressable
          onPress={() => {
            setModal(false);
            setGastado({});
          }}
          style={[styles.btn, styles.btnCancelar]}>
          <Text style={styles.btnTexto}>Cancelar</Text>
        </Pressable>

        {!!id && (
          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onPress={() => eliminarGasto(id)}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>
          {gastado?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}
        </Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del Gasto. Ej: Comida"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad del Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad del del Gasto. Ej: 9999"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Categoria Gasto</Text>
          <Picker
            selectedValue={categoria}
            onValueChange={value => setCategoria(value)}>
            <Picker.Item label="--Seleccione --" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos Varios" value="gastos" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />
          </Picker>
        </View>

        <Pressable
          onPress={() => handleGasto({nombre, cantidad, categoria, id, fecha})}
          style={styles.submitBtn}>
          <Text style={styles.submitBtnTexto}>
            {gastado?.nombre ? 'Guardar Cambios' : 'Agregar Gasto'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#1E40AF',
    flex: 1,
  },
  formulario: {
    ...globalStyles.contenedor,
    transform: [{translateY: 20}],
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#64748B',
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  campo: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#3B82F6',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  submitBtnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    flex: 1,
  },
  btnCancelar: {
    backgroundColor: '#DB2777',
  },
  btnEliminar: {
    backgroundColor: 'red',
  },
  btnTexto: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FormularioGasto;
