import { StyleSheet } from 'react-native';

export const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FFC8D5',
  },
  cartList: {
    paddingBottom: 16,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#C59898',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_400Regular'
  },
});
