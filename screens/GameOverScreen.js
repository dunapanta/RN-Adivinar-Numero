import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import MainButton from '../components/MainButton'
import DefaultStyles from '../constants/default-styles'
import Colors from '../constants/colors'

const GameOverScreen = ({ rounds, selectedNumber, newGame }) => {
    return(
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Fin del Juego</Text>
            {/* For images you can use local  or network images*/}
            <View style={styles.imageContainer}>
                <Image 
                    fadeDuration={1000}
                    source={require('../assets/images/success.png')}
                    // img from web source={{uri: 'https://cdn.pixabay.com/photo/2020/12/21/19/05/window-5850628_960_720.png'}} 
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.resultContainer}>
                <Text 
                    style={DefaultStyles.bodyText}
                >
                    Tu teléfono necesitó 
                    <Text style={styles.highlight}> {rounds} </Text> 
                    intentos para adivinar el número 
                    <Text style={styles.highlight}> {selectedNumber} </Text>
                </Text>
            </View>
            <MainButton butonText="Volver a Jugar" onPress={newGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image:{
        width: '100%',
        height: '100%',
    },
    resultContainer:{
        marginHorizontal: 30 ,
        marginVertical: 15
    },
    highlight:{
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
})

export default GameOverScreen