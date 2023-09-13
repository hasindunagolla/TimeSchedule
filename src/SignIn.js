import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';

const SignIn = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const isSignInDisabled = !isValidEmail || !name || !password || password !== repeatedPassword;

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Image style={{ width: 210, height: 160, margin: 12 }} source={require('./assets/signin.png')} />
        <TextInput
          style={styles.textBox}
          placeholder="Enter Your Name:"
          placeholderTextColor="#5C5C5C"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Enter Your E-mail:"
          placeholderTextColor="#5C5C5C"
          onChangeText={(text) => {
            setEmail(text);
            setIsValidEmail(validateEmail(text));
          }}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Enter Your Password:"
          placeholderTextColor="#5C5C5C"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.textBox}
          placeholder="Re-Enter Password:"
          placeholderTextColor="#5C5C5C"
          onChangeText={(text) => setRepeatedPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: isSignInDisabled ? '#AAA' : '#3549FF' }]}
          onPress={() => {
            if (!isSignInDisabled) {
              navigation.navigate('main'); // Add  sign-in logic here
            }
          }}
          disabled={isSignInDisabled}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('log-in')}>
          <Text style={{ color: 'black', marginTop: 10, marginBottom: 10 }}>Already have an account? <Text style={{ color: 'blue' }}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    justifyContent: 'center',
  },
  centerContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 10,
  },
  textBox: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#F0F0F0',
    marginBottom: 12,
  },
  customButton: {
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 65,
    backgroundColor:'#3549FF'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignIn;
