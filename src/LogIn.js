import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email);
    };

    const isLogInDisabled = !isValidEmail || password.trim() === '';

    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Image style={{ width: 210, height: 160, margin: 12 }} source={require('./assets/login.png')} />
                <TextInput
                    style={styles.textBox}
                    placeholder="Enter Your E-mail:"
                    placeholderTextColor="#5C5C5C"
                    onChangeText={(text) => {
                        setEmail(text);
                        const isValid = validateEmail(text);
                        setEmail(text);
                        setIsValidEmail(validateEmail(text));
                    }}
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <TextInput
                    style={styles.textBox}
                    placeholder="Enter Your Password:"
                    placeholderTextColor="#5C5C5C"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />

                {isValidEmail && password.trim() !== '' ? (
                    <TouchableOpacity
                        style={[
                            styles.customButton,
                            { backgroundColor: '#3549FF' },
                        ]}
                        onPress={() => {
                            // Add your login logic here
                            navigation.navigate('main');
                        }}
                    >
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.customButtonDisabled}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </View>
                )}

                <TouchableOpacity onPress={() => navigation.navigate('sign-in')}>
                    <Text style={{ color: 'black', marginTop: 10, marginBottom: 10 }}>Haven't account? <Text style={{ color: 'blue' }}>Sign in</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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
        backgroundColor: '#3549FF'
    },

    customButtonDisabled: {
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 65,
        backgroundColor: '#AAA'
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    errorText: {
        color: 'red',
        marginBottom: 5,
    },
})

export default LogIn;
