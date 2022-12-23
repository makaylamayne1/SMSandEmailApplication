import React from 'react';
import {StyleSheet,Text,  View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import EmailScreen from './EmailScreen';
import SendSMS from './SendSMS'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
        <Stack.Screen name="SendSMS" component={SendSMS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




