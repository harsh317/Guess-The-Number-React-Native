import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

function BodyText({children,style}) {
    return (
        <View>
            <Text style={{...styles.body,...style}}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        fontFamily: 'opensansregular'
    }
})

export default BodyText
