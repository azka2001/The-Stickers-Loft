import { StyleSheet } from 'react-native';

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC8D5',
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  email: {
    fontSize: 16,
    color: '#666666',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  recentlyBoughtContainer: {
    marginBottom: 24,
  },
  recentlyBoughtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  itemImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  review: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  detailsContainer: {
    marginBottom: 24,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  buttonsContainer: {
    marginBottom: 16,
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

export { profileStyles };
