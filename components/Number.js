import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
function Number({children}) {
    return (
        <View style={styles.summarystyle}>
            <Text style={styles.textstyle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    summarystyle: {
        borderWidth: 2,
        borderColor: '#f7287b',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,

    },

    textstyle: {
        color: '#f7287b',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium'
    }
})

export default Number
