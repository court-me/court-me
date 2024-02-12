import React, { useEffect } from 'react';
import app from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const auth = getAuth(app);

export default function App() {

  const testSignIn = () => {
    signInWithEmailAndPassword(auth, "test@example.com", "testpassword")
      .then((userCredential) => {
        // Sign in successful
        const user = userCredential.user;
        console.log("User signed in: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing in: ", errorCode, errorMessage);
      })
  }

  useEffect(() => {

  }, [])


  return (
    <View style={styles.container}>
      <Text>Firebase Authentication Test</Text>
      <StatusBar style="auto" />
      <Button title="Test Sign In" onPress={testSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
