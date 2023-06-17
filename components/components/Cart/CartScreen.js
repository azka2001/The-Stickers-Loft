import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { cartStyles } from './CartScreenStyles';

const CartScreen = ({ cartItems, total, navigation}) => {
  const renderCartItem = ({ item }) => (
    <View style={cartStyles.cartItem}>
      <Text style={cartStyles.itemName}>{item.name}</Text>
      <Text style={cartStyles.itemQuantity}>Quantity: {item.quantity}</Text>
      <Text style={cartStyles.itemPrice}>Price: ${item.price}</Text>
    </View>
  );

  const goBack = () => (
        navigation.navigate("Stickers")
  );
  const navigateToCheckout = () => (
    navigation.navigate("Check Out")
);

  return (
    <View style={cartStyles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        style={cartStyles.cartList}
      />

      <View style={cartStyles.totalSection}>
        <Text style={cartStyles.totalText}>Total: ${total}</Text>
      </View>

      <View style={cartStyles.buttonsContainer}>
        <TouchableOpacity onPress={navigateToCheckout} style={cartStyles.button}>
          <Text style={cartStyles.buttonText}>Go to Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goBack} style={cartStyles.button}>
          <Text style={cartStyles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
