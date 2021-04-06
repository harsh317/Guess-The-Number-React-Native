import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

function TitleText({children,style}) {
    return (
        <View>
            <Text style={{...styles.title,...style}}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'opensansbold',
        fontSize: 20,
    }
})

export default TitleText
