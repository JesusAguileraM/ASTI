import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text,FlatList,Button} from "react-native";
import Tab1 from './registroScreens/ScreenParte1';
import Tab2 from './registroScreens/ScreenParte2';
import Tab3 from './registroScreens/ScreenParte3';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  }
});


const Tab = createMaterialTopTabNavigator();
const ScreenCreateCuenta =({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name=' ' component={Tab1} />
        <Tab.Screen name='  ' component={Tab2} />
        <Tab.Screen name='   ' component={Tab3} />
      </Tab.Navigator>
    </NavigationContainer>
    );
};
Tab.navigationOptions ={
    headerShown:true,
  
}

export default ScreenCreateCuenta;
