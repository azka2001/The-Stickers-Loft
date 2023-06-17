import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, KeyboardAvoidingView } from 'react-native';
import { styles } from './signUpStyle.js';
import * as Font from 'expo-font';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const loadFonts = async () => {
    await Font.loadAsync({
      PlayfairDisplay_400Regular,
      PlayfairDisplay_600SemiBold,
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const isValidEmail = (email) => {
    const validDomains = ['gmail.com', 'yahoo.com'];
    const emailParts = email.split('@');
    if (emailParts.length !== 2) {
      setEmailError('Invalid email format');
      return false;
    }
    const domain = emailParts[1];
    if (!validDomains.includes(domain)) {
      setEmailError('Email domain is not allowed');
      return false;
    }
    setEmailError('');
    return true;
  };

  const isValidPassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password must be 8 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const onSignUp = () => {
    if (!email || !username || !password || !confirmPassword) {
      setEmailError(email ? '' : 'Please enter your email');
      setUsernameError(username ? '' : 'Please enter your username');
      setPasswordError(password ? '' : 'Please enter your password');
      setConfirmPasswordError(confirmPassword ? '' : 'Please confirm your password');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      if (isValidEmail(email) && isValidPassword(password)) {
        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
          if (auth) {
            navigation.reset({
              index: 0,
              routes: [{ name: "Stickers" }],
            }); 
          }
        })
        .catch((error) => {
          setConfirmPassword("Invalid inputs");
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <Image source={require('../../assets/LOGO.png')} style={styles.logo} />
      <Text style={styles.title}>The Sticker's Loft</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          onFocus={() => {
            setEmailError('');
          }}
        />
        {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={username}
          onChangeText={setUsername}
          autoCapitalize='none'
          onFocus={() => {
            setUsernameError('');
          }}
        />
        {usernameError !== '' && <Text style={styles.error}>{usernameError}</Text>}
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onFocus={() => {
            setPasswordError('');
          }}
        />
        {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          onFocus={() => {
            setConfirmPasswordError('');
          }}
        />
        {confirmPasswordError !== '' && (
          <Text style={styles.error}>{confirmPasswordError}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={onSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={{ fontFamily: 'PlayfairDisplay_400Regular' }}>Already have an account?</Text>
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpButtonText}>Log In!</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen;
