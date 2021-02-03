import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import CuadroTexto from '../../componentes/CuadroTexo';
import CuadroTextoNum from '../../componentes/CuadroTexoNum';
import CuadroTextoCorreo from '../../componentes/CuadroTexoCorreo';
import BotonSiguiente from '../../componentes/BotonSiguiente';


const ModalInfo =()=>{
    const [modal, setModal] = useState("La informacion que acaba ... Más ");
    const actualizarModal = () =>{
        setModal("La informacion que acaba de enviar funcionara para darle un correo institucional y se le enviara al correo que nos proporsiono");
    }
    return(
        <Text style={styles.textModal} onPress={actualizarModal}> {modal} </Text>
    )
}
const Enviar =()=>{
    const [textoBoton, setTextoBoton] = useState("Enviar");
    const actualizarTexto = () =>{
        setModal("Enviado");
    }
    return(
        <Text style={styles.buttoText} onPress={actualizarTexto}> {textoBoton} </Text>
    )
}
const ScreenParte1 =({navigation})=> {

        
        return (
            <View style={styles.container}>
                <Text ></Text>
                <Text style={styles.text}>Creando Cuenta</Text>
                <Text >Información Personal</Text>

                <View><Text ></Text></View>
                    <CuadroTexto input1={'Nombre Completo'} icono={'user'}/>
                <View><Text ></Text></View>
                    <CuadroTextoCorreo input1={'Correo electronico'} icono={'envelope'} />
                <View><Text ></Text></View>
                    <CuadroTextoNum input1={'Numeo de celular'} icono={'phone'} />
                <View><Text ></Text></View>
                <View><Text ></Text></View>
                <View><Text ></Text></View>
                <TouchableOpacity style={styles.buttonRedondo}  onPress={()=>{ navigation.navigate('  ')} } >
                    <Text style={styles.buttoText} >Enviar</Text>
                    
                </TouchableOpacity>
                <View><Text ></Text></View>
                <View><Text ></Text></View>
                <View><Text ></Text></View>
                <ModalInfo/>

            </View>
        );
    }

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#f1f3f6',
        },
        text: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        textInput:{
            flex: 1,
            paddingHorizontal: 12,
        },
        textModal:{
            fontSize: 16,
            textAlign: 'center',
            width:'90%'
        },
        inputView:{
            width: '100%',
            height: 44,
            backgroundColor: '#fff',
            borderRadius: 8,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            

        },
        buttonRedondo:{
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 14,
            paddingHorizontal: 40,
            backgroundColor: '#5352ed',
            borderRadius: 1000,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
        },
        buttoText:{
            color: '#fff',
            fontWeight: 'bold',
            fontSize:16
        }
        });


export default ScreenParte1;
