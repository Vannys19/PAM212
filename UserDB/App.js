import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InsertUsuarioScreen from './screens/IsertUsuariosScreen';

export default function App() {
  return (

    <InsertUsuarioScreen />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
