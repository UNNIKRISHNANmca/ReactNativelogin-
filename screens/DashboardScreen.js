import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const DashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout logic here (clear any authentication tokens or session data)
    // In this example, we remove the user details from secure storage upon logout.
    SecureStore.deleteItemAsync('user');
    navigation.navigate('Registration');
  };

  const handleFetchUserDetails = async () => {
    // Fetch user details from secure storage (using the logged-in user's email, for example)
    const user = await SecureStore.getItemAsync('user');
    if (user) {
      const userDetails = JSON.parse(user);
      // Display the user details
      Alert.alert(
        'User Details',
        `Full Name: ${userDetails.fullName}\nEmail: ${userDetails.email}`
      );
    } else {
      Alert.alert('Error', 'User details not found.');
    }
  };

  return (
    <View>
      <Text>Welcome User!</Text>
      <Button title="Log Out" onPress={handleLogout} />
      <Button title="Fetch User Details" onPress={handleFetchUserDetails} />
    </View>
  );
};

export default DashboardScreen;
