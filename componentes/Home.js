import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );


export const Home = ({ navigation }) => {
    return(
    <ScreenContainer>
      <Text>Master List Screen</Text>
      <Button title="hola"/>
    </ScreenContainer>
    
    )
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    background:{
      height: "100%",
      width: "100%"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    }
  });