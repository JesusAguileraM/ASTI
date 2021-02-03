import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';

const CuadroTextoCorreo = (props) => {
    //let ancho_pantalla = Dimensions.get('window').width;
    //let alto_pantalla = Dimensions.get('window').height;
    const {input1} = props; //estamos usando destructurar en props (Es como cuando importamos un componente especifico)
    const {icono} = props;
    return (
        <View style={styles.inputView}>
        <Icon
            color='#5352ed'
            name={icono}
            type='font-awesome'
            size={20}
        />
        <TextInput
            style={styles.textInput}
            placeholder={input1}
            textContentType='emailAddress'
            keyboardType='email-address'
            autoCapitalize='none'
        />
    </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInput:{
        flex: 1,
        paddingHorizontal: 12,
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
        

    }
    });


export default CuadroTextoCorreo;