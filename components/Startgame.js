import React, { useState, useEffect } from "react";
import {View, Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard,Alert,Dimensions,ScrollView,KeyboardAvoidingView} from 'react-native'
import Card from './Card'
import Input from './Input'
import Number from './Number'
import BodyText from './BodyText'
import TitleText from './TitleText'
import OwnButton from './OwnButton'

function Startgame({onstart}) {
    const [input,setinput] = useState('')
    const [confirmed,setconfirmed] = useState(false)
    const [finalnumber,setfinalnumber] = useState()
    const [buttonwidth,setbuttonwidth] = useState(Dimensions.get('window').width / 4 )


    const confirminput = () =>{ 
        if(isNaN(parseInt(input)) || parseInt(input) <= 0 || parseInt(input) > 99 ){
            Alert.alert('Invalid Numeber','The number has to be between 0-99 only',[{text:'Okay',style:"destructive",onPress: ()=>{setinput(''),setconfirmed(false)}}])
        }
        setconfirmed(true)
        setfinalnumber(parseInt(input))
        setinput('');
        Keyboard.dismiss()
    }

    useEffect(()=>{
        Dimensions.addEventListener('change', ()=> {setbuttonwidth(Dimensions.get('window').width / 4)})
        return () => {
            Dimensions.removeEventListener('change',()=>{setbuttonwidth(Dimensions.get('window').width / 4)})
        }
    })
    
    let confirmedoutput

    if (confirmed){
        confirmedoutput =
        <Card style={styles.summary}>
            <Text>You Selected</Text>
            <Number>{finalnumber}</Number>
            <OwnButton onPress={() => {onstart(finalnumber)}}>Start Game</OwnButton>
        </Card>    
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
                    <View style={styles.window}>
                        <TitleText style={styles.titletext}>Start A new Game</TitleText>
                        <Card style={styles.inputcon}>
                            <BodyText>Select A Number</BodyText>
                            <Input styleinput={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} onChangeText={(enteredtext)=>{setinput(enteredtext.replace(/[^0-9]/g, ''))}} value={input} />
                            <View style={styles.buttons}>
                                <View style={[styles.button, {width: buttonwidth}]}><Button title="Reset" onPress={()=>{setinput(''),setconfirmed(false)}} color="red" /></View>
                                <View style={styles.button}><Button title="Confirm" onPress={confirminput} color="#f7287b" /></View>
                            </View>
                        </Card>
                        {confirmedoutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    window: {
        flex:1,
        padding: 10,
        alignItems: 'center'
    },

    titletext:{
        fontSize: 30,
        marginVertical: 10,
        fontFamily: 'opensansbold'
    },

    buttons:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    inputcon: {
        width: '80%',
        minWidth: 300,
        maxWidth: '90%',
        alignItems: 'center'
    },

    button:{
    },

    input:{
        textAlign: 'center',
        textAlignVertical: 'center',
        width:50,
    },

    summary: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

 });

export default Startgame
