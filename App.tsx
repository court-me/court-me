import "./firebaseConfig";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "./src/contexts/AuthContext"; 
import { AuthProvider } from "./src/contexts/AuthContext";
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

export default AppNavigator;
/*
import Auth, {AuthEventEmitter, AuthEvents} from 'react-native-firebaseui-auth';

...

  componentDidMount() {
    this.eventListener = AuthEventEmitter.addListener(
      AuthEvents.AUTH_STATE_CHANGED,
      event => {
        console.log('user:', event.user);
      }
    );
  }

  componentWillUnmount() {
    this.eventListener.remove(); //Removes the listener
  }

...

  const config = {
    providers: [
      'anonymous',
      'facebook', 
      'google', 
      'email', 
      'phone', 
      'apple', 
      'yahoo', 
      'github', 
      'twitter', 
      'microsoft'
    ],
    tosUrl: 'https://example.com/tos.htm',
    privacyPolicyUrl: 'https://example.com/privacypolicy.htm',
  };

  Auth.signIn(config)
    .then(user => console.log(user))
    .catch(err => console.log(err));

...

  Auth.getCurrentUser().then(user => console.log(user));

...

  Auth.signOut().then(res => console.log(res));

...

  Auth.deleteUser().then(res => console.log(res));

...
*/