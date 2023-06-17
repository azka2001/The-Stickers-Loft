import { StyleSheet } from 'react-native';

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
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_400Regular',
    fontWeight: 'bold',
    color: 'black',
  },
  faqSection: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  faqAnswer: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  complaintInput: {
    borderWidth: 1,
    borderColor: '#5E5E5E',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    fontFamily: 'PlayfairDisplay_400Regular',
    color: 'black',
    backgroundColor: '#F3F3F3',
  },
  contactEmail: {
    marginTop: 16,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
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
