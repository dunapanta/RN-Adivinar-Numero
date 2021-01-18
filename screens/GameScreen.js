import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import Colors from '../constants/colors'
import DefaultStyles from '../constants/default-styles'

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

const GameScreen = ({ userChoice, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    // Game Over
    useEffect( () => {
        if(currentGuess === userChoice) {
            onGameOver(rounds)
        }
     }, [currentGuess, userChoice, onGameOver])
 

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)){
            Alert.alert("Sin trampas 😠", "Sabes que has mentido", [{text: 'Lo Siento', style: 'cancel'}])
            return
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)

        setCurrentGuess(nextNumber)
        setRounds(currRounds => currRounds + 1)
        
    }

    return(
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Número del Oponente</Text>
            <NumberContainer number={currentGuess}/>
            <Card style={styles.buttonContainer}>
                <MainButton 
                    style={{backgroundColor: Colors.accent, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20}} 
                    butonText="MENOR" 
                    onPress={ () => nextGuessHandler('lower') }/>
                <MainButton 
                    style={{backgroundColor: Colors.accent, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20}}
                    butonText="MAYOR" 
                    onPress={ () => nextGuessHandler('greater')}/>
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