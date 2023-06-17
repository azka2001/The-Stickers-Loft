import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFC8D5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#5E5E5E',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  paymentLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  paymentButton: {
    padding: 10,
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  paymentButtonSelected: {
    backgroundColor: '#ccc',
  },
  paymentButtonText: {
    fontSize: 16,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  confirmButton: {
    backgroundColor: '#C59898',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
});

export default styles;
