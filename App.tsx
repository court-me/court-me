import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import app from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import { ResponseType } from "expo-auth-session";
import { AuthProvider } from "./src/contexts/AuthContext";

import { StatusBar } from "expo-status-bar";

const auth = getAuth(app);

// Sign Up
const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
    // Navigate to your app's main content or verify email
  } catch (error) {
    console.error(error);
    // Show error message to user

  }
};

// Sign In
const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
    // Navigate to your app's main content
  } catch (error) {
    console.error(error);
    // Show error message to user
  }
};

const googleLogin = async () => {
  const auth = getAuth();
  const [request, response, promptAsync] = await Google.useIdTokenAuthRequest({
    clientId: 'YOUR_WEB_CLIENT_ID_FROM_FIREBASE',
  });

  if (response?.type === 'success' && response.authentication) {
    const credential = GoogleAuthProvider.credential(response.authentication.idToken);
    signInWithCredential(auth, credential).catch((error) => {
      console.log(error);
    });
  }
};

export default function App() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "Your_Google_ClientId",
  });

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
      });
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      // Use the Google ID token to sign in with backend
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>Firebase Authentication Test</Text>
      <StatusBar style="auto" />
      <Button title="Test Sign In" onPress={testSignIn} />
      <Button
        disabled={!request}
        title="Login with Google"
        onPress={() => {
          promptAsync();
        }}
      />
        <Button title="Sign in with Google" onPress={googleLogin} />
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
