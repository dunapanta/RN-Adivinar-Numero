import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

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
