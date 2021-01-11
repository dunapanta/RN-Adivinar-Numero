import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/colors'

const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        // replace with regular expretion to not enter . - or anything that is not a number
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)

        if(isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Número Inválido', 'Debes ingresar un número entre 1 y 99', [{text: 'Aceptar', style: 'destructive', onPress: resetInputHandler}])
        }
        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(chosenNumber)
    }

    return(
        /* Keyboard.dismiss() para quitar el teclado cuando se presiona en la pantalla */
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Comezar a Jugar!</Text>
                {/* Card Section */}
                <Card style={styles.inputCointainer}>
                    <Text>Selecciona un Número</Text>
                    <Input 
                        style={styles.input} 
                        keyboardType='number-pad' 
                        maxLength={2} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color="#C62828" title="Resetear" onPress={resetInputHandler}/></View>
                        <View style={styles.button}><Button color="#09af00" title="Confirmar" onPress={confirmInputHandler}/></View>
                    </View>
                </Card>
                {confirmed && <Text>Número Elegido: {selectedNumber}</Text>}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputCointainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15
    },
    button:{
        width: 98,
    },
    input:{
        width: 60,
        textAlign: 'center',
        fontSize: 27

    }
})

export default StartGameScreen