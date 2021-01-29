import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const ScreenDetalles = ({navigation})=> {
    const body= navigation.getParam('body','nada');
    const title= navigation.getParam('title','nada');
    const nombreUsuario1=navigation.getParam('name','la bestia2');
    return (
        <View style={styles.container}>
            <Text>{nombreUsuario1}</Text>
            <Text>{title}</Text>
            <Text> {body} </Text>
        </View>
    );
    }

    const styles= StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

export default ScreenDetalles