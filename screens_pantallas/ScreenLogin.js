import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from 'react-native';

// You can use your custom background image
import BackgroundImage from '../src/images/2.jpg';

// expo install expo-font
import { useFonts } from 'expo-font';

// https://fonts.google.com/specimen/Source+Sans+Pro
// import SourceSansProLight from '../src/fonts/SourceSansProLight';
// import SourceSansProRegular from '../src/fonts/SourceSansProRegular';
// import SourceSansProBold from '../src/fonts/SourceSansProBold';

// npm install react-native-elements
import { Icon } from 'react-native-elements';

// npm install react-native-animatable
import * as Animatable from 'react-native-animatable';


const ScreenLogin= function LoginScreen4({navigation}) {
  const [loaded] = useFonts({
    // SourceSansProLight,
    // SourceSansProRegular,
    // SourceSansProBold,
  });

  if (!loaded || !BackgroundImage) {
    return <Text>CARGANDO...</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ height:600, width: 400 }}
            source={BackgroundImage}
          />
        </View>
        <Animatable.Text
          style={styles.titleText}
          animation='fadeInUp'
          delay={1200}
        >
          Inscripciones
        </Animatable.Text>
        <View style={styles.bottomView}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='person'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Usuario'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Contraseña'
              secureTextEntry={true}
              autoCapitalize='none'
            />
          </View>
          <Text style={styles.fpText}>¿Olvide Contraseña?</Text>
          <TouchableOpacity style={styles.loginButton} onPress={()=>{ navigation.navigate('HomePrincipal')} }>
            <Text style={styles.loginButtonText} >Login</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            ¿No tienes una cuenta?     
            <TouchableOpacity onPress={()=>{ navigation.navigate('CrearCuenta')} }>
              <Text style={{ color: '#5352ed',fontSize: 16  }}>
                {'        Registrarme'}
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1b396b'
  },
  titleText: {
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    color: '#fff',
    
    fontSize: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    backgroundColor: '#fff',
    opacity: 0.95,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f1f3f6',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#5352ed',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    
    alignSelf: 'center',
    fontSize: 18,
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    
    fontSize: 15,
  },
  fpText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    
    fontSize: 16,
    color: '#5352ed',
  },
});
export default ScreenLogin;