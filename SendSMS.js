
import React, {useState} from 'react';
import {StyleSheet,Alert,Text,  View, Button, TextInput } from 'react-native';
import * as SMS  from 'expo-sms'
import { registerRootComponent } from 'expo';


const talkLaterDialog ={
  text:'Okay',
  onPress: ()=>Alert.alert(
    'We will message you back within 24 hours',
    'We will talk to you in a bit...',
    [
      {
        text:'Close'
      }
    ]
  )
}

//Home Component
const SendSMS = props =>{
  [message, setMessage]= useState();

  //change the text
  onChangeHandler=(value)=>{
    setMessage(value);
  }

//send the message via sms 
sendMessageWithSMS=async()=>{
 const isAvailable = await SMS.isAvailableAsync();
if(isAvailable){
  const {result}= await SMS.sendSMSAsync(
    ['5198720660','3039289302'],
      message
  );
  Alert.alert('SMS Sent!',
  'Your SMS has been sent successfully!',
  [
    talkLaterDialog,
  ],
  {
    cancelable:false
  },
)
  }
  else{
    Alert.alert('Error sending: SMS is not available');
  }
}

    return (
      <View style={styles.container }>
        <Text>YOU ARE GOING TO SEND THE FOLLOWING INFO:</Text>
        <Text>539 MAIN STREET</Text>
        <Text>LONDON, ON</Text>
        <Text>555-555-5555</Text>
        <Text>maynemakayla@gmail.com</Text>
        <TextInput style={styles.textInput} numberOfLines={10} onChangeText={onChangeHandler} placeHolder="Message goes here"/>
        <Button title="Send SMS"  onPress={sendMessageWithSMS}></Button>
      </View>
    );
  };

  export default SendSMS;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee6c0',
      alignItems: 'center',
      justifyContent: 'center',
      fontweight: 'bold',
    },
    form:{
      margin:30,
    },
    textInput:{
      backgroundColor:'white',
      width:'50%',
      borderBottomColor:'black',
    },
  });