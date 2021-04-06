import React from 'react'
import {TextInput,StyleSheet} from 'react-native'

function Input(props) {
    return (
        <TextInput {...props} style={{...styles.input,...props.styleinput}} />
    )
}

const styles = StyleSheet.create({
    input:{
        height:30,
        borderColor: 'grey',
        borderWidth:1,
        borderRadius: 15,
        marginVertical: 10,
    }
})

export default Input
