import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';
const IconoCarga = (props) => {
    
    return (
        <>
            <Image style={styles.iconoCarga}  source={require('../src/images_carga/DoubleRin.gif')}/>
            <Text>Cargando amika ...</Text>
        </>
        
    )
}

const styles = StyleSheet.create({
    iconoCarga:{
        width:100,
        height:100,
    }
    });


export default IconoCarga;