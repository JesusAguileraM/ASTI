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



const ScreenCreateCuenta =({navigation}) => {
    return (
    <View style={styles.container}>
        <Text>Pantalla de inicio de seción</Text>
        <Text>Usuario</Text>
        <Text>Contrase;a</Text>
        
        <Button title='Iniciar2' onPress={()=>{ navigation.navigate('Users')} }/>
        
        <Button title='Crear cuenta '/>
    
    </View>
    );
};


export default ScreenCreateCuenta;