import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PantallaUsuario from './screens_pantallas/ScreenUsuario';
import PantallaPost from './screens_pantallas/ScreenPost';
import PantallaDetalles from './screens_pantallas/ScreenDetalles';


const AppNavigator= createStackNavigator({
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
    initialRouteName: 'Users',
  });

export default createAppContainer(AppNavigator);
