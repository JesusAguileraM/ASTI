import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PantallaUsuario from './screens_pantallas/ScreenUsuario';
import PantallaPost from './screens_pantallas/ScreenPost';
import PantallaDetalles from './screens_pantallas/ScreenDetalles';
import LoginScreen from './screens_pantallas/ScreenLogin';
import CrearCuentaScreen from './screens_pantallas/ScreenCreateCuenta';
import PantallaHome from './screens_pantallas/ScreenHome';



const CrearCuentaNavigator= createStackNavigator({
  Login:{
    screen : LoginScreen
  },
  CrearCuenta:{
    screen : CrearCuentaScreen
  }
  
},{
    initialRouteName: 'Login',
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: '#1b396b',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: '900'
      },
      headerShown:null
    }//Aqui puedo poner la configuracion que yo quiera para cada uno(estos son los estilos para el header)
  });


const HomeNavigator= createStackNavigator({
  HomePrincipal:{
    screen: PantallaHome
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
    initialRouteName: 'HomePrincipal',
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: '#1b396b',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: '900'
      },
      headerShown:null
    }//Aqui puedo poner la configuracion que yo quiera para cada uno(estos son los estilos para el header)
  });


  const ManejadorStack = createStackNavigator({ //Maneja diferentes stack para poder usarlos independientemente
    Login: CrearCuentaNavigator,
    Main: HomeNavigator
  },{
    initialRouteName: 'Login',
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: '#1b396b',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: '900'
      },
      headerShown:null
    }
  })
export default createAppContainer(ManejadorStack);
