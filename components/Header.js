import React from 'react'
import {View, Text,StyleSheet,Platform} from 'react-native'
import TitleText from './TitleText'

function Header({title}) {
    return (
        <View style={{...styles.headerBase,...Platform.select({ios:styles.headerios,android:styles.headerandroid})}}>
            <TitleText style={styles.title}>{title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        height: 100,
        width: '100%',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerandroid:{
        backgroundColor: '#f7287b'
    },
    headerios:{
        borderBottomColor: '#ccc',
        borderWidth: 2,
        backgroundColor: 'white',
    },

    title:{
        color: Platform.OS === 'ios' ? '#f7287b' : 'white'
    }
});


export default Header
