import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CFlip from "../../componentes/ComponenteFlip";

const ScreenParte2 =({navigation})=> {
        return (
            <View style={styles.container}>
                <Text ></Text>
                <Text style={styles.text}>Oferta Educativa</Text>
                <Text >Carreras</Text>
            </View>
        );
    }

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        text: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        });
export default ScreenParte2;
