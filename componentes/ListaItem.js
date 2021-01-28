import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const styles= StyleSheet.create({
    container:{
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingHorizontal: 12
    },
    text:{
        fontSize: 20
    }
})


export default ({names, onPress})=>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}> {names}</Text>
        </TouchableOpacity>
    )
}