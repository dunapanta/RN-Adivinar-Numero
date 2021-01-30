import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

import Colors from '../constants/colors'

const MainButton = ({ butonText, onPress, style }) => {
    let ButtonComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
         ButtonComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.5} onPress={onPress}>
                <View style={{...styles.button, ...style}}>
                    <Text style={styles.text}>{butonText}</Text>
                </View>
            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadbius: 25
    },
    text:{
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default MainButton