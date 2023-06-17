import { StyleSheet } from 'react-native';

const stickersStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC8D5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  saleContainer: {
    backgroundColor: '#FFC107',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  saleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  previewContainer: {
    padding: 20,
    backgroundColor: '#C59898',
    borderRadius: 5,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    backgroundColor: '#F3F3F3',
    padding: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  itemPrice: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  seeAll: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: 'black',
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  image: {
    width: 300,
    height: 300,
  },
  detailsTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_400Regular',
    padding: 5
  },
  stockText: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_400Regular',
    padding: 5,
    color: 'green'
  },
  stockOutText: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_400Regular',
    padding: 5,
    color: 'red'
  },
});

export { stickersStyles };
