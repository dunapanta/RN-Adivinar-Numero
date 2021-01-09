import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Comezar a Jugar!</Text>
            {/* Card Section */}
            <Card style={styles.inputCointainer}>
                <Text>Selecciona un Número</Text>
                <TextInput />
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
        paddingHorizontal: 15
    },
    button:{
        width: 98,
    }
})

export default StartGameScreen