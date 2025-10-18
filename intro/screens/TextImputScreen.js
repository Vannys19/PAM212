// Importamos React y los componentes necesarios de React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';

// Componente principal
export default function TextScreen() {

  // Estados (valores que cambian)
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [comentario, setComentario] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función que se ejecuta cuando el usuario presiona el botón
  const enviarDatos = () => {
    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || contraseña.trim() === '' || comentario.trim() === '') {
      Alert.alert('Error', 'Por favor completa todos los campos');
      alert('Error: Por favor completa todos los campos');
      setMensaje('Faltan campos por llenar');
    } else {
      Alert.alert('¡Éxito!', 'Datos enviados correctamente');
      alert('¡Éxito! Datos enviados correctamente');
      setMensaje('Datos enviados correctamente');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de ejemplo</Text>

      {/* Input para el nombre */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        keyboardType='numeric'
      />

      {/* Input para contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry={true}
      />

      {/* Input con varias líneas para comentario */}
      <TextInput
        style={[styles.input, { height: 100, textAlignVertical: 'top' }]} 
        placeholder="Escribe un comentario"
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
      />

      {/* Botón para enviar los datos */}
      <Button title="Enviar" onPress={enviarDatos} />

      {/* Mensaje que cambia dinámicamente */}
      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>
  );
}

// Estilos de la interfaz
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    gap:10
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#a47bf7ff',
    padding:12,
    borderRadius:9
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#e431f1ff',
    textAlign:'center'
  }
});