// UserDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const UserDetailScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>User Detail Screen</Text>
      {/* Display user details here */}
      <Button title="Go Back" onPress={handleGoBack} />
    </View>
  );
};

export default UserDetailScreen;
