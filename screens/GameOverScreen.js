import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import DefaultStyles from '../constants/default-styles'

const GameOverScreen = ({ rounds, selectedNumber, newGame }) => {
    return(
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Fin del Juego</Text>
            {/* For images you can use local  or network images*/}
            <Image source={require('../assets/images/success.png')} />
            <Text style={DefaultStyles.bodyText}>Número de Rondas: {rounds}</Text>
            <Text style={DefaultStyles.bodyText}>El número elegido fue: {selectedNumber}</Text>
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