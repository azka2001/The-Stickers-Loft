import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFC8D5',
  },
  profileContainer: {
    alignItems: 'left',
    marginBottom: 16,
  },
  profileInfo: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  formContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#5E5E5E',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
    backgroundColor: '#F3F3F3',
  },
  button: {
    backgroundColor: '#C59898',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_400Regular'
  },
});

export default styles;
