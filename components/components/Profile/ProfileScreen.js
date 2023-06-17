import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { profileStyles } from './ProfileScreenStyles';

const ProfileScreen = ({navigation}) => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    recentlyBought: {
      item: 'Item Name',
      review: 'Great product!',
    },
    address: '123 Main St, City, Country',
    contact: 'Phone: 123-456-7890',
    username: 'johndoe123',
  };

  const handleChangePassword = () => {
    navigation.navigate("Change Password")
  };

  const handleLogout = () => {
    navigation.navigate("Login")
  };

  return (
    <ScrollView style={profileStyles.container}>
      <View style={profileStyles.profileContainer}>
        <Text style={profileStyles.name}>{user.name}</Text>
        <Text style={profileStyles.email}>{user.email}</Text>
      </View>

      <View style={profileStyles.recentlyBoughtContainer}>
        <Text style={profileStyles.recentlyBoughtTitle}>Recently Bought</Text>
        <Image source={user.recentlyBought.image} style={profileStyles.itemImage} />
        <Text style={profileStyles.itemName}>{user.recentlyBought.item}</Text>
        <Text style={profileStyles.review}>{user.recentlyBought.review}</Text>
      </View>

      <View style={profileStyles.detailsContainer}>
        <Text style={profileStyles.detailsTitle}>Address:</Text>
        <Text style={profileStyles.detailsText}>{user.address}</Text>

        <Text style={profileStyles.detailsTitle}>Contact:</Text>
        <Text style={profileStyles.detailsText}>{user.contact}</Text>

        <Text style={profileStyles.detailsTitle}>Username:</Text>
        <Text style={profileStyles.detailsText}>{user.username}</Text>
      </View>

      <View style={profileStyles.buttonsContainer}>
      <TouchableOpacity style={profileStyles.button} onPress={handleChangePassword}>
        <Text style={profileStyles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <Text>{"\n"}</Text>
      <TouchableOpacity style={profileStyles.button} onPress={handleLogout} >
        <Text style={profileStyles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
