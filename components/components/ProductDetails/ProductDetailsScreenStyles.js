import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFC8D5',
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  productContainer: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 8,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  quantityContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 16,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  addToCartButton: {
    backgroundColor: '#C59898',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  button: {
    backgroundColor: '#C59898',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay_400Regular'
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default styles;
