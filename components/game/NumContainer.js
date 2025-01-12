import { View, Text, StyleSheet } from 'react-native';

function NumContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

export default NumContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'yellow',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    number: {
        color: 'white',
        textAlign: 'center', 
        fontSize: 30,
        fontWeight: 'bold',
    },
});
