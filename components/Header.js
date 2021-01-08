import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 35,
        backgroundColor: '#ff8d00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
})

export default Header;