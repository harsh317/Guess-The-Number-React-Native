import React from 'react'
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native'

function OwnButton({children,style,onPress}) {

    return (
            <TouchableOpacity onPress={onPress}>
                <View style={{...styles.button,...style}}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f7287b',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        borderColor: '#f7287b',
        borderWidth: 1
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'opensansbold'
    }
})

export default OwnButton
