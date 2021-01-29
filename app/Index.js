import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PantallaUsuario from './screens_pantallas/ScreenUsuario';
import PantallaPost from './screens_pantallas/ScreenPost';
import PantallaDetalles from './screens_pantallas/ScreenDetalles';
import LoginScreen from './screens_pantallas/ScreenLogin';
import CrearCuentaScreen from './screens_pantallas/ScreenCreateCuenta';


const AppNavigator= createStackNavigator({
  Login:{
    screen : LoginScreen
  },
  CrearCuenta:{
    screen : CrearCuentaScreen
  },
  Users: {
    screen: PantallaUsuario
  },
  Post: {
    screen: PantallaPost
  },
  Detail:{
    screen: PantallaDetalles
  }
},{
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);
