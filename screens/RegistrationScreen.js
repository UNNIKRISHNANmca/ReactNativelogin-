import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Check if the user already exists (you may use a proper database or storage for this)
    const existingUser = await SecureStore.getItemAsync(email);
    if (existingUser) {
      Alert.alert('Error', 'This email is already registered.');
      return;
    }

    // Save the user details to secure storage
    const userDetails = {
      fullName,
      password, // In a real app, you would want to hash the password before saving it.
    };
    await SecureStore.setItemAsync(email, JSON.stringify(userDetails));

    // Clear the registration form fields
    setFullName('');
    setEmail('');
    setPassword('');

    // Navigate to the DashboardScreen after registration
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Full Name</Text>
      <TextInput value={fullName} onChangeText={setFullName} />

      <Text>Email Address</Text>
      <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;
