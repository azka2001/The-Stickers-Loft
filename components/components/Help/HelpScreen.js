import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from './helpstyles';

const HelpScreen = ({navigation}) => {
  const [complaint, setComplaint] = useState('');

const handleComplaintSubmit = () => {
  // Handle the complaint submission logic here
  // You can send the complaint to a server or perform any other desired action
  console.log('Complaint submitted:', complaint);
  // Reset the complaint input
  setComplaint('');

  // Display a pop-up message
  Alert.alert('Success', 'Complaint submitted');
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>

      <View style={styles.faqSection}>
        <Text style={styles.faqQuestion}>Where is shipping available?</Text>
        <Text style={styles.faqAnswer}>Shipping is available nationwide! (aka Pakistan :D)</Text>

        <Text style={styles.faqQuestion}>What is the minimum price order we can purchase?</Text>
        <Text style={styles.faqAnswer}>Your order needs to be of atleast Rs 200!</Text>

        <Text style={styles.faqQuestion}>Can we place custom orders?</Text>
        <Text style={styles.faqAnswer}>For that, you'll be needing to contact us on the email below or on instagram @thestickersloft</Text>

        {/* Add more FAQ questions and answers here */}
      </View>

      <TextInput
        style={styles.complaintInput}
        placeholder="Leave your complaint here"
        value={complaint}
        onChangeText={text => setComplaint(text)}
        multiline
        numberOfLines={4}
      />
<TouchableOpacity style={styles.button} onPress={handleComplaintSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.contactEmail}>Contact us: example@example.com</Text>
    </View>
  );
};


export default HelpScreen;