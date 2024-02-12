// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';

const firebaseWebClientId = Constants.manifest.extra.firebaseWebClientId;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const auth = getAuth();

const signInWithEmail = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Login success');
    } catch (error: any) {
        Alert.alert('Login failed', error.message);
    }
};

const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: firebaseWebClientId,
});

  React.useEffect(() => {
    if (response?.type === 'success') {
      // Handle successful Google sign-in 
      console.log('Google sign-in success');
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={signInWithEmail} />
      <Button title="Sign In with Google" disabled={!request} onPress={() => promptAsync()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
