// 1.- Import:Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2.- MAIN: Zona de componentes
export default function App() {
  const[contador,setContador]= useState(0);
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}> {contador} </Text>
      <View style={styles.contenedorBotones}>
      <Button color='blue' title='Incrementar'onPress={()=>setContador(contador+1)}/>
        <Button color='red' title='Quitar' onPress={()=>setContador(contador-1)}/>
          <Button color='green' title='Reiniciar' onPress={()=>setContador(contador-contador)}/>
      </View>
      <StatusBar style="auto"/>
    </View>

  );
}
//3.- Estilos: Zona de estetica y posicionamineto
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(21, 12, 12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'rgb(207, 18, 18)',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'900',
    fontStyle:'robot',
    textDecorationLine:'line-through',
  },
  texto2:{
    color:'rgb(106, 6, 245)',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'400',
    fontStyle:'robot',
    textDecorationLine:'underline',
    
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:'row-reverse',
    gap:20
  },
});
