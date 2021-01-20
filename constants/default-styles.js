import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    bodyText:{
        fontFamily: 'open-sans',
        fontSize: Dimensions.get('window').height < 400 ? 12 : 16,
        textAlign: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    }
})