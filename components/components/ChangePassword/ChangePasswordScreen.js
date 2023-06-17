import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './ChangePasswordScreenStyles';


const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Add your password change logic here
    if (newPassword === confirmPassword) {
      console.log('Password changed successfully');
      // Reset the input fields
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      console.log('New password and confirm password do not match');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Display profile icon, name, and username */}
        <Text style={styles.profileInfo}>Profile Icon</Text>
        <Text style={styles.profileInfo}>Name</Text>
        <Text style={styles.profileInfo}>Username</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Old Password"
          secureTextEntry
          value={oldPassword}
          onChangeText={text => setOldPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
