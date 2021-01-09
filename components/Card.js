import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
    {/* ...props.style can override properties from styles.card */}
    return(
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
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
    }
})

export default Card;