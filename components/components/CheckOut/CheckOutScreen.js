import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './CheckOutScreenStyles'

const CheckoutScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirmOrder = () => {
    // Handle the order confirmation logic here
    // You can send the order details to a server or perform any other desired action
    console.log('Order confirmed:', {
      name,
      address,
      contact,
      paymentMethod,
    });

    // Reset the form fields
    setName('');
    setAddress('');
    setContact('');
    setPaymentMethod('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
      />

      <Text style={styles.paymentLabel}>Payment Method:</Text>

      <TouchableOpacity
        style={[
          styles.paymentButton,
          paymentMethod === 'CashOnDelivery' && styles.paymentButtonSelected,
        ]}
        onPress={() => setPaymentMethod('CashOnDelivery')}
      >
        <Text style={styles.paymentButtonText}>Cash on Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentButton,
          paymentMethod === 'CreditCard' && styles.paymentButtonSelected,
        ]}
        onPress={() => setPaymentMethod('CreditCard')}
      >
        <Text style={styles.paymentButtonText}>Credit Card</Text>
      </TouchableOpacity>

      <Text style={styles.totalPrice}>Total Price: $XXX.XX</Text>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;
