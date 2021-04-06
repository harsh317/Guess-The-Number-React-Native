import React,{useState,useRef,useEffect} from 'react'
import {View, Text,StyleSheet,Alert,ScrollView,Dimensions} from 'react-native'
import Number from './Number'
import Card from './Card'
import TitleText from './TitleText'
import OwnButton from './OwnButton'
import BodyText from './BodyText'
import {Ionicons} from '@expo/vector-icons'
import * as ScreenOrientation from 'expo-screen-orientation';

const generateRandomNo = (min,max,exclude) => {
    const rndno = Math.floor( Math.random() * ( 1 + min - max ) ) + max
    if (rndno ==  exclude ){
        return generateRandomNo(max,exclude)
    } else{
        return rndno
    }

}

function GameMainScreen({userChoice,Gameover}) {
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT) Stop rotating when app reaches a certain point
    const initalguess = generateRandomNo(1,99,userChoice)
    const [pastguess,setpastguess] = useState([initalguess])
    const [guess,setguess] = useState(initalguess)
    const [availdeviceheight,setavaildeviceheight] = useState(Dimensions.get('window').height)

    const currentlow = useRef(1);
    const currenthigh = useRef(100);

    useEffect(()=>{
        if (guess == userChoice){
            Gameover(pastguess.length)
        }
    },[guess,userChoice,Gameover])

    useEffect(()=>{
        Dimensions.addEventListener('change', ()=> {setavaildeviceheight(Dimensions.get('window').height);
    })
        return () => {
            Dimensions.removeEventListener('change',()=>{setavaildeviceheight(Dimensions.get('window').height)})
        }
    })

    const nextguess = (direction) => {
        if (direction == 'lower' && userChoice > guess || direction == 'higher' && userChoice < guess){
            Alert.alert('Cheater Cock','You that thats wrong.....',[{text:'Okay',style:"cancel"}]);
            return;
        }else{
                if (direction == 'lower'){
                    currenthigh.current = guess
                    console.log(currenthigh.current)
                }
                else{
                    currentlow.current = guess
                }
                
                guessedno = generateRandomNo(currentlow.current,currenthigh.current,guess)
                setguess(guessedno)
        }       
                setpastguess(curpastguess => [guessedno,...curpastguess])     
        } 

        if(availdeviceheight < 500){
            return (
                <View style={styles.window}>
                    <TitleText>Opponents Guess</TitleText>
                    <View style={styles.fixrow}>
                        <OwnButton onPress={()=>{nextguess('lower')}}><Ionicons name="ios-remove-circle-sharp" size={24} color="white" /></OwnButton>
                        <Number>{guess}</Number>
                        <OwnButton onPress={()=>{nextguess('higher')}}><Ionicons name="ios-add-circle-sharp" size={24} color="white" /></OwnButton>
                    </View>
                    <View style={styles.list}>
                        <ScrollView contentContainerStyle={styles.listviewcon}>
                        <Text>Actual Number</Text>
                        <Number>{userChoice}</Number>
                        {pastguess.map((guesses,index) => <View style={styles.listItem} key={Math.random()}><BodyText>{pastguess.length-index})</BodyText><BodyText>{guesses}</BodyText></View>)}
                        </ScrollView>
                    </View>
                </View>
            )
        }

    return (
        <View style={styles.window}>
            <TitleText>Opponents Guess</TitleText>
            <Number>{guess}</Number>
            <Card style={styles.button}>
                <OwnButton onPress={()=>{nextguess('lower')}}><Ionicons name="ios-remove-circle-sharp" size={24} color="white" /></OwnButton>
                <OwnButton onPress={()=>{nextguess('higher')}}><Ionicons name="ios-add-circle-sharp" size={24} color="white" /></OwnButton>
            </Card>
            <Text>Actual Number</Text>
            <Number>{userChoice}</Number>
            <View style={styles.list}>
                <ScrollView contentContainerStyle={styles.listviewcon}>
                {pastguess.map((guesses,index) => <View style={styles.listItem} key={Math.random()}><BodyText>{pastguess.length-index})</BodyText><BodyText>{guesses}</BodyText></View>)}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    window: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5,
        marginTop: Dimensions.get('window').height > 600  ? 20 : 10,
        width:400,
        maxWidth: '90%'
    },
    list:{
        width: Dimensions.get('window').width < 350 ? '80%' : '60%' ,
        minWidth: 200,
        flex: 1
    },
    listviewcon:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    fixrow: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'70%'
    },
    listItem: {
        flexDirection: 'row',
        borderColor: '#f7287b',
        marginVertical: 10,
        padding: 10,
        borderWidth: 2,
        backgroundColor: '#ccc',
        justifyContent: 'space-between',
        width: '90%'
    }

})

export default GameMainScreen
