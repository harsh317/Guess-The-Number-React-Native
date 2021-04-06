import React from 'react'
import {View,StyleSheet} from 'react-native'
function Card({style,children}) {
    return (
        <View style={{...styles.card,...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
        card: {
            // shadowColor: 'grey', // only on ios
            // shadowOffset: {width: 0, height:2},
            // shadowRadius: 6,
            // shadowOpacity: 0.26,
            elevation: 10,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 20
        }
})
export default Card
