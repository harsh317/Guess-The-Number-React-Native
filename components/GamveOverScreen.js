import React from 'react'
import {View, Text,StyleSheet,Image,Dimensions,ScrollView} from 'react-native'
import BodyText from './BodyText'
import TitleText from './TitleText'
import OwnButton from './OwnButton'

function GamveOverScreen({rounds,NewgameHandler}) {
    return (
        <ScrollView>
            <View style={styles.window}>
                <TitleText>Game Is Over</TitleText>
                <View style={styles.imgcontainer}>
                    <Image fadeDuration={1000} source={require('../assets/success.png')} style={styles.image}/>
                </View>
                <View style={styles.resultcon}>
                    <BodyText style={styles.resulttext}>Your Phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to find out the Number </BodyText>
                </View>
                <OwnButton onPress={NewgameHandler}>Reset</OwnButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    window:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },

    imgcontainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2 ,
        borderColor: 'black',
        borderWidth: 3,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
    },

    image:{
        width: '100%',
        height: '100%',
        borderRadius: 50
    },

    highlight: {
        color: '#f7287b',
        fontFamily: 'opensansbold'
    },

    resultcon:{
        marginVertical: 10,
        marginHorizontal: 20
    },

    resulttext: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height > 600 ? 20 : 15
    }
})

export default GamveOverScreen
