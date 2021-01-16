import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
/* import { AppLoading } from 'expo' */
import AppLoading from 'expo-app-loading'

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

// function to load the fonts i want to use
const fetchFonts = () => {
  /* loadAsync returns a promise */
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded]  = useState( false)

  if(!dataLoaded){
    /* startAsync needs a function that returns a promise, when the promise resolves and execute onFinish  */
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={ () => setDataLoaded(true)} 
              onError={ (err) => console.log(err)}
            />
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    
  }

  const gameOverHandler = ( numOfRounds ) => {
    setGuessRounds(numOfRounds)
  }

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }
  
  let content = <StartGameScreen onStart={startGameHandler}/>
  if (userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} selectedNumber={userNumber} newGame={newGameHandler}/>
  }


  return (
    <View style={styles.screen}>
      <Header title="Adivinar el Número"/>
          {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
