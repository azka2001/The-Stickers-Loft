import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Linking, KeyboardAvoidingView, Pressable } from 'react-native';
import { styles } from './logInStyle.js';
import * as Font from 'expo-font';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


function LoginScreen({navigation}) {
  const loadFonts = async () => {
    await Font.loadAsync({
      PlayfairDisplay_400Regular,
      PlayfairDisplay_600SemiBold,
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onLogIn = () => {
    if (email.trim() === '' && password.trim() === '') {
      setPasswordError('Please enter your email and password');
      setSuccessMessage('');
    } else if (password.trim() === '') {
      setPasswordError('Please enter your password');
      setSuccessMessage('');
    } else if (email.trim() === '') {
      setEmailError('Please enter your email');
      setSuccessMessage('');
    } else {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [{ name: "Profile" }],
        });
      })
      .catch((error) => {
        setPasswordError("Email or Password is incorrect.");
      });
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
        <Text style={styles.link} onPress={() => Linking.openURL('')}>
          Forgot Password?
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onLogIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}
      {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}
      {successMessage !== '' && <Text style={styles.success}>{successMessage}</Text>}
      <View style={styles.text}>
        <Text style={{ fontFamily: 'PlayfairDisplay_400Regular' }}>Don't have an account?</Text>
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.signUpButtonText}>Sign Up!</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
