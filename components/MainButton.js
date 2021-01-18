import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/colors'

const MainButton = ({ butonText, onPress, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={{...styles.button, ...style}}>
                <Text style={styles.text}>{butonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    text:{
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
})

export default MainButton