import React, { useEffect } from "react";
import app from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const auth = getAuth(app);

/*
- Searching for courts
- Viewing court details
- Booking a court
- Submitting reviews

We will user React Navigation for routing between different screens
We will use Firebase for authentication and database
We will use Google Maps for displaying court locations
We will use Google Places for searching for courts
We will use Stripe for payment processing
We will use Context API for state management

We will need to integrate Expo with MapView and Google Places
We will mock backend for now

UI/UX will be intuitive and engaging


*/

export default function App() {
  // Sign up new users
  const signUpWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
      })
      .catch((error) => {
        // Handle errors here.
      });
  };

  // Sign in existing users
  const signInWithEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
      })
      .catch((error) => {
        // Handle errors here.
      });
  };

  // const testSignIn = () => {
  //   signInWithEmailAndPassword(auth, "test@example.com", "testpassword")
  //     .then((userCredential) => {
  //       // Sign in successful
  //       const user = userCredential.user;
  //       console.log("User signed in: ", user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("Error signing in: ", errorCode, errorMessage);
  //     });
  // };

  // useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Firebase Authentication Test</Text>
      <StatusBar style="auto" />
      {/* <Button title="Test Sign In" onPress={testSignIn} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
