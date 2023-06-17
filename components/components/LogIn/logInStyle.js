import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#FFC8D5',
    },
    title: {
      fontSize: 24,
      marginBottom: 60,
      textAlign: 'center',
      fontFamily: 'PlayfairDisplay_400Regular'
    },
    inputContainer: {
      marginBottom: 20,
      width: '70%', 
    },
    input: {
      borderWidth: 1,
      borderColor: '#5E5E5E',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      fontFamily: 'PlayfairDisplay_400Regular'
    },
    button: {
      backgroundColor: '#F3F3F3',
      padding: 10,
      borderRadius: 5,
    },
    signUpButton: {
      backgroundColor: '#F3F3F3',
      padding: 2,
      borderRadius: 5,
    },
    signUpButtonText: {
      color: 'black',
      textAlign: 'center',
      fontFamily: 'PlayfairDisplay_400Regular'
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'PlayfairDisplay_400Regular'
    },
    error : {
      color: 'red',
      margin: 10,
      textAlign: 'center',
      fontFamily: 'PlayfairDisplay_600SemiBold'
    },
    success: {
      color: 'green',
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontFamily: 'PlayfairDisplay_600SemiBold'
    },
    logo: {
        width: 80,
        height: 80,
        margin: 20
    },
    link: {
        color: 'black',
        marginTop: 0,
        margin: 5,
        textAlign: 'right',
        fontFamily: 'PlayfairDisplay_400Regular', 
        textDecorationLine: 'underline'
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'PlayfairDisplay_400Regular',
        marginBottom: 20,
        position: 'absolute',
        bottom: 0, 
    }
  });

  export {styles};