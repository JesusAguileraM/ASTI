import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text,FlatList} from "react-native";
import ListaItemNombres from '../componentes/ListaItem';
import {Image} from 'react-native';
import IconoCarga from '../componentes/IconoCarga';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  lista:{
    alignSelf: 'stretch'
  },
  iconoCarga:{
    width:100,
    height:100,

  }
});



const ScreenUsuario= ({navigation}) => {
  const [cargando, setCargando]=useState(true);
  const [user,setUsers]=useState([]);

  const fetchUsuarios= async()=>{
    const resulta = await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await resulta.json();
    setUsers(data);
    setCargando(false);
  }
  useEffect(()=> {fetchUsuarios()}
  ,[])
  return (
    <View style={styles.container}>
      {cargando ? <IconoCarga/>: 
        <FlatList 
        style={styles.lista}
        data={user}
        keyExtractor={x => String(x.id)}
        renderItem={({item})=> <ListaItemNombres onPress={()=>{
          return navigation.navigate('Post', {user_id: item.id, name:item.name });
        }} names={item.name}/> } 
      />}
    
    </View>
  );
};


export default ScreenUsuario;