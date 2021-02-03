import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScreenParte3 =({navigation})=> {
    
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Tab A</Text>
            </View>
        );
    }

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        });


export default ScreenParte3;
