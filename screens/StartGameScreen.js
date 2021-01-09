import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartGameScreen = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Comezar a Jugar!</Text>
            {/* Input Section */}
            <View style={styles.inputContainer}>
                <Text>Selecciona un Numero</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Cancelar" onPress={() => {}}/>
                    <Button title="Confirmar" onPress={() => {}}/>
                </View>
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
    title:{
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        padding: 30,
        borderRadius: 10,
        /* shadow for IOS */
        shadowColor: 'black',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        /* shadow for Android default material design elevation*/
        elevation: 7
    },
    buttonContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen