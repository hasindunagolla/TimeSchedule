import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/SignIn';
import LogIn from './src/LogIn';
import Main from './src/Main';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" component={SignIn} options={{ title: 'SignIn' }} />
        <Stack.Screen name="log-in" component={LogIn} options={{ title: 'LogIn' }} />
        <Stack.Screen name='main' component={Main} options={{ title: "Main" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
