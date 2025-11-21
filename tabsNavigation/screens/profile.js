import {View,Text,StyleSheet, Pressable} from 'react-native';
import Detalles from './detalles';

export default function Profile({navigation}){
    return(
        <View style={styles.container}>

                <Text style={styles.title}>Perfil de usuario</Text>
                <Pressable onPress={() => navigation.navigate('detalles')}>
                    <Text style={{color:'blue', marginTop:20, fontSize:16}}>Ver Detalles</Text>
                </Pressable>


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
    fontSize:22,
    fontWeight:'bold',
    marginLeft:10,
    color:'green',
},
});