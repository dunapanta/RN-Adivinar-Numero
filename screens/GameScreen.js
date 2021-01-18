import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

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
    const initialGuess = generateRandomBetween(1, 100, userChoice)

    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    // Game Over
    useEffect( () => {
        if(currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
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
            currentLow.current = currentGuess + 1
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)

        setCurrentGuess(nextNumber)
        // setRounds(currRounds => currRounds + 1)
        setPastGuesses( curPastGuesses => [nextNumber, ...curPastGuesses])
        
    }

    return(
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Número del Oponente</Text>
            <NumberContainer number={currentGuess}/>
            <Card style={styles.buttonContainer}>
                <MainButton 
                    style={{backgroundColor: Colors.accent, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20}} 
                    butonText={<Ionicons name="md-remove" size={30} color="white"/>} 
                    onPress={ () => nextGuessHandler('lower') }/>
                <MainButton 
                    style={{backgroundColor: Colors.accent, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20}}
                    butonText={<Ionicons name="md-add" size={30} color="white"/>}  
                    onPress={ () => nextGuessHandler('greater')}/>
            </Card>
            <View style={styles.list}>
                <ScrollView>
                    {pastGuesses.map( (guess, index) => (
                        <View key={guess} style={styles.listItem}>
                            <Text style={DefaultStyles.bodyText}>intento #{pastGuesses.length - index}</Text>
                            <Text>{guess}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
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
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    list:{
        flex: 1, // necesary to scroll on Android
        width: '80%'
    },
    listItem:{
        flexDirection: 'row',
        borderColor: '#CCC',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    }
})

export default GameScreen