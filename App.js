import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SignUpScreen from './components/SignUp/signUp';
import LoginScreen from './components/LogIn/logIn';
import HelpScreen from './components/Help/HelpScreen';
import StickersScreen from './components/Stickers/StickersScreen';
import ChangePasswordScreen from './components/ChangePassword/ChangePasswordScreen';
import ProfileScreen from './components/Profile/ProfileScreen';
import CartScreen from './components/Cart/CartScreen';
import CheckOutScreen from './components/CheckOut/CheckOutScreen';
import ProductDetailsScreen from './components/ProductDetails/ProductDetailsScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Tab.Screen name="Sign Up" component={SignUpScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Stickers" component={StickersScreen} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Check Out" component={CheckOutScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Product" component={ProductDetailsScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Change Password" component={ChangePasswordScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Help" component={HelpScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
