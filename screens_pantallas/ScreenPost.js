import React, {useState,useEffect} from "react";
  import { StyleSheet, View, Text,FlatList} from "react-native";
  //import { initialWindowMetrics } from "react-native-safe-area-context";
  import ListaItemNombres from '../componentes/ListaItem';
  //import ScreenPost from "./ScreenPost";

    export default ({navigation}) => {

    const userId=navigation.getParam('user_id','Dato default');
    const nombreUsuario=navigation.getParam('name','la bestia');
    const [cargando, setCargando]=useState(true);
    const [post,setPost]=useState([]);
    const fetchPost= async()=>{
      const resulta = await fetch('https://jsonplaceholder.typicode.com/posts'); //aqui pido puro post, en el anterior era users
      const data= await resulta.json();
      setPost(data);
      setCargando(false);
    }
    useEffect(()=> {fetchPost() }
    
    ,[])
    
    return (
      <View style={styles.container}>
        {cargando ? <Text> Cargando </Text>: 
          <FlatList 
          style={styles.lista}
          data={post.filter(x => x.userId === userId)} // el primer user_id es de post y el otro userId es del usuario de la ventana que me trajo aqui
          keyExtractor={x => String(x.id)}
          renderItem={({item})=> <ListaItemNombres onPress={()=>{
            return navigation.navigate('Detail', {title: item.title, body:item.body, name:nombreUsuario});
          }} names={item.title}/> } 
        />}
      
      </View>
    );
  };
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
  