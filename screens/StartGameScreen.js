import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card'

const StartGameScreen = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Comezar a Jugar!</Text>
            {/* Card Section */}
            <Card style={styles.inputCointainer}>
                <Text>Selecciona un Número</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Cancelar" onPress={() => {}}/>
                    <Button title="Confirmar" onPress={() => {}}/>
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
    }
})

export default StartGameScreen