import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
//no lo estoy usando porque no me deja usar el navigate a qui, aunque importes el componente donde si lo trae, desde aqui no puedo
const BotonSiguiente = (props) => {
    const {ir_a} = props; //estamos usando destructurar en props (Es como cuando importamos un componente especifico)
    const {nombre} = props;
    return (
        <TouchableOpacity style={styles.buttonRedondo} >
            <Text style={styles.buttoText} >{nombre}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
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


export default BotonSiguiente;