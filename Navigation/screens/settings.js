import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function Settings({navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Esta es la pantalla de Configuración</Text>
        <Pressable style={[styles.button , styles.buttonProfile]} onPress={()=> navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Ir a Perfil</Text>
            </Pressable>
            <Pressable style={[styles.button , styles.home]} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Volver a Home</Text>
            </Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:40,
        textAlign:'center',
    },
    button:{
        paddingVertical:15,
        paddingHorizontal:30,
        borderRadius:8,
        marginBottom:20,
        width:'80%',
        alignItems:'center',

    },
    buttonProfile:{
        backgroundColor:'#007bff',
    
    },
    home:{
        backgroundColor:'#ff8800',
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
    },
    
});