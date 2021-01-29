import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text,FlatList,Button} from "react-native";
import ListaItemNombres from '../componentes/ListaItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  lista:{
    alignSelf: 'stretch'
  }
});



// export default ({navigation}) => {
//     return (
//     <View style={styles.container}>
//         <Text>Pantalla de inicio de seción</Text>
//         <Text>Usuario</Text>
//         <Text>Contrase;a</Text>
        
//         <Button title='Iniciar' onPress={()=>{ navigation.navigate('CrearCuenta')} }/>
        
//         <Button title='Crear cuenta '/>
//     </View>
//     );
// };
const ScreenLogin= ({navigation})=>{
  return (
    <View style={styles.container}>
        <Text>Pantalla de inicio de seción</Text>
        <Text>Usuario1</Text>
        <Text>Contrase;a</Text>
        
        <Button title='Iniciar' onPress={()=>{ navigation.navigate('CrearCuenta')} }/>
        
        <Button title='Crear cuenta '/>
    </View>
    );
}
ScreenLogin.navigationOptions={//Sirve para configurar la pantalla
  title: 'Pantalla de Login'
}

export default ScreenLogin;