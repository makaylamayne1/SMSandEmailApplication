
import React ,{useState} from 'react';
import {TextInput, Alert,Text,  View, Button , StyleSheet} from 'react-native';
import * as MailComposer from 'expo-mail-composer'

//Home Component
const EmailScreen = props =>{
  [message, setMessage]= useState();

  //change the text
  onChangeHandler=(value)=>{
    setMessage(value);
  }

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

  sendMessageWithEmail=async()=>
  {
    const isAvailable= await MailComposer.isAvailableAsync();
    if(isAvailable){
      var options={
        recipients:['makayla@gmail.com'],
        subject:'My subject line',
        body:'Message'
      };
      Alert.alert('Email Sent!',
      'Your Email has been sent successfully!',
      [
        talkLaterDialog,
      ],
      {
        cancelable:false
      },
    )
    MailComposer.composeAsync(options).then((result)=>{Alert.alert(result.status);})
    }else{
      Alert.alert('Email not available')
    }
  }

    return (
      <View style={styles.container}>
        <Text>YOU ARE GOING TO SEND THE FOLLOWING INFO:</Text>
        <Text>539 MAIN STREET</Text>
        <Text>LONDON, ON</Text>
        <Text>555-555-5555</Text>
        <Text>maynemakayla@gmail.com</Text>
        <TextInput style={styles.textInput} numberOfLines={10} onChangeText={onChangeHandler} placeHolder="Message goes here"/>
        <Button title='Send Email' onPress={sendMessageWithEmail}></Button>
      </View>
    );
  };

  export default EmailScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b7afe6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
      margin:30,
    },
    textInput:{
      backgroundColor:'white',
      width:'50%',
    },
  });