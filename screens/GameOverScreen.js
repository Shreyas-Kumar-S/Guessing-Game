import { View, Text, StyleSheet } from 'react-native';

function GameOverScreen(){
    return (
    <View style={styles.container}>
        <Text style={styles.test}>Game is Over!</Text>
    </View>
    );
}

export default GameOverScreen;
const styles= StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    test:{
        color: 'white',
        fontSize:20
    },
})