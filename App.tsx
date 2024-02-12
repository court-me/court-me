import './firebaseConfig';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './src/contexts/AuthContext'; // Adjust path as needed
import HomeScreen from './screens/HomeScreen'; // Adjust path and implement this screen
import LoginScreen from './screens/LoginScreen'; // Adjust path and implement this screen

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
