import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import DefaultStyles from '../constants/default-styles'

const GameOverScreen = ({ rounds, selectedNumber, newGame }) => {
    return(
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Fin del Juego</Text>
            {/* For images you can use local  or network images*/}
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/success.png')} 
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
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
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image:{
        width: '100%',
        height: '100%',
    }
})

export default GameOverScreen