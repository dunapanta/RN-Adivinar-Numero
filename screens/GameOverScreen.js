import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = ({ rounds, selectedNumber, newGame }) => {
    return(
        <View style={styles.screen}>
            <Text>Fin del Juego</Text>
            <Text>Número de Rondas: {rounds}</Text>
            <Text>El número elegido fue: {selectedNumber}</Text>
            <Button title="Volver a Jugar" onPress={newGame}/>
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