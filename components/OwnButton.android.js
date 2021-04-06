import React from 'react'
import {View, Text,StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native'

function OwnButton({children,style,onPress}) {
    let ButonComponent = TouchableOpacity
    if(Platform.Version >= 21){
        ButonComponent = TouchableNativeFeedback
    }
    return (
        <View style={styles.buttoncontainer}>
            <ButonComponent onPress={onPress}>
                <View style={{...styles.button,...style}}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </ButonComponent>
        </View>
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
    buttoncontainer:{
        overflow: 'hidden',
        borderRadius: 25 
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'opensansbold'
    }
})

export default OwnButton
