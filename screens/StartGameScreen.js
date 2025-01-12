import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Title from "../components/ui/Title";

import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({ selectedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const num = parseInt(enteredNumber);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert(
        "Invalid Input",
        "Number must be between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    selectedNumber(num);
  }

  return (
    <View style={styles.screen}>
      <Title>Guessing Game</Title>
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Enter a Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={3}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={inputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    marginTop: 90,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 20,
    padding: 5,
    backgroundColor: "#4e0329",
    borderRadius: 5,
    elevation: 4,
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    shadowOpacity: 0.5,
  },
  title:{
    margin: 2,
    padding: 10,
    fontSize: 26,
    color: 'yellow'
  },

  numberInput: {
    height: 40,
    width: 100,
    textAlign: "center",
    fontSize: 18,
    borderBottomColor: "yellow",
    borderBottomWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 10,
    color: "yellow",
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});
