import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text,FlatList} from "react-native";
//import { initialWindowMetrics } from "react-native-safe-area-context";
import ListaItemNombres from '../componentes/ListaItem';
//import ScreenPost from "./ScreenPost";
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



export default ({navigation}) => {
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
      {cargando ? <Text> Cargando </Text>: 
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
