import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../constants/colors'

const NumberContainer = ({ number }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 5,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number:{
        color: Colors.primary,
        fontSize: 30
    }

})

export default NumberContainer