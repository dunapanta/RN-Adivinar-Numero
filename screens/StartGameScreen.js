import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import MainButton from '../components/MainButton'
import DefaultStyles from '../constants/default-styles'
import Colors from '../constants/colors'

const StartGameScreen = ({ onStart }) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    //When the user change the orientation
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)

    const numberInputHandler = inputText => {
        // replace with regular expretion to not enter . - or anything that is not a number
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    useEffect( () => {
        //function that run on every re-render
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change', updateLayout)
        //if return somethin in useEffect is the clean up function that runs BEFORE useEffect runs
        return () => {
            //clean up the listener
            Dimensions.removeEventListener('change', updateLayout)
        }
    })

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)

        if(isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Número Inválido', 'Debes ingresar un número entre 1 y 99', [{text: 'Aceptar', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss()
    }

    return(
        <ScrollView>
            {/* Se usa KeyboardAvoidingView para no sobreponer el teclado en el input donde se tipea mejor padding para Android y position para IOS */}
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
            {/* Keyboard.dismiss() para quitar el teclado cuando se presiona en la pantalla */}
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View style={styles.screen}>
                    <Text style={styles.title}>Comezar a Jugar!</Text>
                    {/* Card Section */}
                    <Card style={styles.inputCointainer}>
                        <Text style={DefaultStyles.bodyText}>Selecciona un Número</Text>
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
                            <View style={{width: buttonWidth}}>
                                <MainButton 
                                    style={{backgroundColor: "#C62828", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 20}}
                                    butonText="Resetear" 
                                    onPress={resetInputHandler}/>
                            </View>
                            <View style={{width: buttonWidth}}>
                                <MainButton 
                                    style={{backgroundColor: "#09af00", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 20}}
                                    color="#09af00" 
                                    butonText="Confirmar" 
                                    onPress={confirmInputHandler}/>
                            </View>
                        </View>
                    </Card>
                    {confirmed && (<Card style={styles.sumaryContainer}>
                                        <Text style={DefaultStyles.bodyText}>Número Elegido:</Text>
                                        <NumberContainer number={selectedNumber}/>
                                        <MainButton butonText="INICIAR JUEGO" onPress={() => onStart(selectedNumber)}/>
                                    </Card>)}
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputCointainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15
    },
    /* button:{
        //width: 98,
        //Dimensions.get('window') get the dimensions of the entire device 
        width: Dimensions.get('window').width / 4
    }, */
    input:{
        width: 60,
        textAlign: 'center',
        fontSize: 27

    },
    sumaryContainer: {
        marginTop: 30,
        alignItems: 'center'
    }
})

export default StartGameScreen