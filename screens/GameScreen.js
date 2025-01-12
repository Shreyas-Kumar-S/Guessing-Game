import { View, Text, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumContainer from '../components/game/NumContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
}

let min = 1;
let max = 100;

function GameScreen({ userChoice, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));

  // Ensure the alert shows before triggering game over
  useEffect(() => {
    if (currentGuess === userChoice) {
      Alert.alert(
        "Success!",
        `We have guessed the value correctly: ${currentGuess}`,
        [
          {
            text: "Okay",
            onPress: () => {
              resetRange(); // Reset range before ending the game
              onGameOver();
            },
          },
        ]
      );
    }
  }, [currentGuess, userChoice, onGameOver]);

  function resetRange() {
    min = 1;
    max = 100;
  }

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("No lies please!", 'This is wrong', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      max = currentGuess; // Update max to current guess
    } else {
      min = currentGuess + 1; // Update min to current guess + 1
    }

    if (min === max) {
      Alert.alert("Range Error", "No more numbers to guess!", [{ text: "Restart", onPress: resetRange }]);
      return;
    }

    const newNumber = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(newNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumContainer>{currentGuess}</NumContainer>
      <Text style={styles.text}>Higher or Lower?</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name="add" size={30} color="white" />
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="remove-outline" size={30} color="white" />
        </PrimaryButton>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 29,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});
