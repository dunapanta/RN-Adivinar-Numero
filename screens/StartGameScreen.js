import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/colors'

const StartGameScreen = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Comezar a Jugar!</Text>
            {/* Card Section */}
            <Card style={styles.inputCointainer}>
                <Text>Selecciona un Número</Text>
                <Input style={styles.input} keyboardType='number-pad' maxLength={2} blurOnSubmit autoCapitalize='none' autoCorrect={false}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button color="#C62828" title="Cancelar" onPress={() => {}}/></View>
                    <View style={styles.button}><Button color="#09af00" title="Confirmar" onPress={() => {}}/></View>
                </View>
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