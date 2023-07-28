// LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Text>Email Address</Text>
     
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Registration')} />
    </View>
  );
};

export default LoginScreen;
