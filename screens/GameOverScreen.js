import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GameOverScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>Fin del Juego</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen