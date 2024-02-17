import "./firebaseConfig";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth, AuthProvider } from "./src/contexts/AuthContext"; 
import HomeScreen from "./screens/HomeScreen"; 
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { currentUser } = useAuth();

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {currentUser ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};
8
export default AppNavigator;