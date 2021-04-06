import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import Header from './components/Header'
import Startgame from './components/Startgame'
import GameMainScreen from './components/GameMainScreen'
import GamveOverScreen from './components/GamveOverScreen'

const fetchfonts = () => {
  return Font.loadAsync({
    'opensansregular': require('./assets/fonts/opensansregular.ttf'),
    'opensansbold': require('./assets/fonts/opensansbold.ttf')
  });
}

export default function App() {
  const [usernumber,serusernumber] = useState()
  const [rounds,setrounds] = useState(0)
  const [dataloaded,setdataloaded] = useState(false)

  if(!dataloaded){
    return(
    <AppLoading startAsync={fetchfonts} onFinish={()=>{setdataloaded(true)}} onError={(err)=>{console.log(err)}} />
    )
  }

  const startgamehandler = (selectedNumeber)=>{
    serusernumber(selectedNumeber)
  }

  const NewgameHandler = () => {
    setrounds(0)
    serusernumber(null)
  }

  const gameoverhandler = (noofrounds)=>{
    console.log(noofrounds)
    setrounds(noofrounds)
  }

  let content = <Startgame onstart={startgamehandler} />

  if (usernumber && rounds <= 0){
    content = <GameMainScreen Gameover={gameoverhandler} userChoice={usernumber} />
  }else if(rounds > 0){
    content = <GamveOverScreen rounds={rounds} NewgameHandler={NewgameHandler} />
  }

  return (
    <SafeAreaView style={styles.window}>
        <Header title="Guess A Numeber" />
        {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   window: {
     flex:1
   }
});
