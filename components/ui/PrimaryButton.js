import { View, Text, Pressable, StyleSheet } from 'react-native'

function  PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuter}>
            <Pressable 
                android_ripple={{color:"#640233"}}
                onPress={onPress} 
                style={({pressed})=> pressed ? [styles.pressed,styles.buttonContainer]: styles.buttonContainer}>
                <Text style={styles.textContainer}>{children}</Text>        
            </Pressable>
        </View>
 );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuter:{
        borderRadius:20,
        overflow: 'hidden',
        marginBottom:10,
    },
    buttonContainer: {
        backgroundColor: '#72063c',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textContainer: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    pressed:{
        opacity:0.5,
    }
});