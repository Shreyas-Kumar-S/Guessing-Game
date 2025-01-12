import { StyleSheet, ImageBackground, Alert, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameisOver, setGameisOver] = useState(true);

  function selectedNumberHandler(num) {
    setUserNumber(num);
    setGameisOver(false);
    Alert.alert("Number Selected", `You selected the number: ${num}`);
  }

  function gameOverHandler(){
    setGameisOver(true);
  }


  let screen = <StartGameScreen selectedNumber={selectedNumberHandler} />;
  
  if (userNumber) {
    screen = <GameScreen useNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if(gameisOver && userNumber){
    screen = <GameOverScreen/> 
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./Image/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    opacity: 0.2,
  },
});
