//1
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  Animated,
  Pressable,
  Image,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");
//2
export default function Repaso({ }) {
  // Control del splash y animaciones
  const [showMain, setShowMain] = useState(false);
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [mensaje, setMensaje] = useState("");

  //3 Switch animado
  const toggle = useRef(new Animated.Value(0)).current;
  const [value, setValue] = useState(false);

  useEffect(() => {
    Animated.timing(toggle, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const animatedStyles = {
    transform: [
      {
        translateX: toggle.interpolate({
          inputRange: [0, 1],
          outputRange: [2.5, 25.4],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  //4 Splash animation
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start();

    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(async () => {
        await SplashScreen.hideAsync();
        setShowMain(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
//5
  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  //6 VALIDACIONES DEL FORMULARIO
  const enviarDatos = () => {
    // Validar campos vacíos
    if (nombre.trim() === '' || correo.trim() === '') {
      Alert.alert( "Error","Por favor completa todos los campos antes de continuar.");
      alert("Error: Por favor completa todos los campos antes de continuar.");
      setMensaje("Faltan campos por llenar");
    }else   if (!emailRegex.test(correo)) {
      Alert.alert("Correo no válido", "Por favor ingresa un correo electrónico correcto (ejemplo@dominio.com).");
      alert("Correo no válido: Por favor ingresa un correo electrónico correcto");
      setMensaje("Correo electrónico no válido");
    }else if (!value) {
      Alert.alert("Términos y condiciones","Debes aceptar los términos y condiciones para continuar.");
        alert("Debes aceptar los términos y condiciones para continuar.");  
        setMensaje("Términos y condiciones no aceptados");
    }else {   Alert.alert("¡Registro exitoso!");
      alert("¡Registro exitoso!" + "\nNombre: " + nombre + "\nCorreo: " + correo);
      setMensaje("Registro exitoso");
      // Reiniciar valores
      setNombre("");
      setCorreo("");
      setValue(false);
    }
  };
  
  //7 Pantalla principal
  if (showMain) {
    return (
      <ImageBackground
        source={require("../assets/fondoRep.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.formContainer}>
          <Image
            source={require("../assets/logo.jpeg")}
            style={styles.logoSmall}
          />
          <Text style={styles.titleForm}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#000"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#000"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
          />

          <View style={styles.switchContainer}>
            <Pressable onPress={() => setValue(!value)}>
              <View
                style={[
                  styles.button,
                  { backgroundColor: value ? "#rgb(12, 213, 224)" : "#adadad" },
                ]}
              >
                <Animated.View style={[styles.circle, animatedStyles]} />
              </View>
            </Pressable>
            <Text style={styles.terminosTexto}>
              Acepto términos y condiciones
            </Text>
          </View>

          <View style={styles.content}>
            <Button title="Registrarse" color="#rgb(12, 213, 224) " onPress={enviarDatos} />
          </View>
        </View>
      </ImageBackground>
    );
  }

  //8 Pantalla de carga
  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/LogoIn.png")}
        resizeMode="contain"
        style={[
          styles.logoImage,
          { opacity: fadeLogo, transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }] },
        ]}
      />
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: slideText }] }]}
      >
        Practica de Repaso
      </Animated.Text>
    </Animated.View>
  );
}
//9
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0, 0, 0)",
    justifyContent: "center",
    alignItems: "center",
    
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  logoSmall: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 15,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    alignItems: "center",
    backgroundColor: "hsla(0, 0.00%, 100.00%, 0.08)",
    padding: 25,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  titleForm: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
    color: "#rgb(255, 255, 255)",
  },
  input: {
    width: 250,
    backgroundColor: "#9fd0f3",
    borderWidth: 2,
    borderColor: "#0a3d62",
    padding: 12,
    marginTop: 10,
    borderRadius: 9,
    fontSize: 16,
  },
  content: {
    marginTop: 20,
    width: 200,
    borderRadius: 30,
    overflow: "hidden",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: 50,
    height: 25,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
  },
  terminosTexto: {
    color: "#rgb(255, 255, 255)",
    fontSize: 14,
  },
});