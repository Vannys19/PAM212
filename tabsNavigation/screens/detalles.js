import {View,Text,StyleSheet, Pressable} from 'react-native';

export default function Detalles({navigation}){
    return(
        <View style={styles.container}>
            <Pressable 
                style={styles.button} 
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Regresar</Text>
            </Pressable>
            <View style={styles.iconRow}>

                <Text style={styles.titles}>Detalles de usuario</Text>
                <Text style={styles.title}>Usando Navegación Stack</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    padding:20,
},
iconRow:{
    flexDirection:'colum',
    alignItems:'center',
},
title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:10,
    color:'red',
},
titles:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20,
    color:'black',
},
button:{
    marginBottom:20,
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:'#007BFF',
    borderRadius:5,
},
buttonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
},  
});