import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

// funcion da un numero entre min y max
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rndNum = Math.floor((Math.random() * (max -min))) + min
    // para que no adivine a la primera
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = ({ userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))
    return(
        <View style={styles.screen}>
            <Text>Número del Openente</Text>
            <NumberContainer number={currentGuess}/>
            <Card style={styles.buttonContainer}>
                <Button title="MENOR" onPress={ () => {}}/>
                <Button title="MAYOR" onPress={ () => {}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen