import {Text, StyleSheet, View,Button,ActivityIndicator,} from "react-native";
import { useState } from "react";

export default function Activity_Indicator() {
  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000);
  };

  const detenerCarga = () => {
    setCargando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Práctica Activity Indicator </Text>
      <View style={styles.boton}>
        <Button
          color="green"
          title={cargando ? "Cargando..." : "Iniciar Carga"}
          onPress={iniciarCarga}
        ></Button>
      </View>

      <View style={styles.boton}>
        <Button
          color="red"
          title="Detener Carga"
          onPress={detenerCarga}
        ></Button>
      </View>
      <View style ={styles.carga}>
        <ActivityIndicator
          size="large"
          color="blue"
          animating={cargando}
        ></ActivityIndicator>

        <Text style={styles.textoCarga}>
          {cargando ? "Cargando Datos..." : "Carga Detenida"}

        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
},
texto: {
    color: "#000000ff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 20,
},
boton: {
    width: 220,
    marginBottom: 16,
},
carga: {
    alignItems: 'center',
    marginTop: 20,
},
textoCarga: {
    marginTop: 12,
    fontSize: 16,
    color: '#000000',
},
});