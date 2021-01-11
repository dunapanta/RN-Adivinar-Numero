import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
        <View>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default GameScreen