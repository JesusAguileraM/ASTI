import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text,FlatList,Button} from "react-native";


// npm i @react-navigation/bottom-tabs react-native-elements
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Carrusel from '../componentes/CarruselImagenes';

function TabA() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      
    </View>
  );
}
function TabB() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab B</Text>
    </View>
  );
}
function TabC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab C</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


const ScreenHome =({navigation}) => {
    return (
      <>
    <View style={styles.container}>
        <Text>Pantalla de Home</Text>
        <Text></Text>
        
        <Text></Text>
        <Button title='incritos al itsa' onPress={()=>{ navigation.navigate('Users')} }/>
    </View>
    <Carrusel/>
    <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={
              {
                // Default Color is blue you can change it by following props
                // activeTintColor: '#ff4757',
                // inactiveTintColor: '#ff6b81',
                // Default Background Color is white you can change it by following props
                // activeBackgroundColor: '#ced6e0',
                // inactiveBackgroundColor: '#ced6e0',
              }
            }
        >
            <Tab.Screen
              name='Home'
              component={TabA}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name='home' color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name='Inscribirse'
              component={TabB}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name='message' color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name='Itsa'
              component={TabC}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name='person' color={color} size={size} />
                ),
              }}
            />
        </Tab.Navigator>
    </NavigationContainer>
    
    </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default ScreenHome;