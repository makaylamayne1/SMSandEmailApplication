
import React from 'react';
import { Title,Text,  View, Button , StyleSheet} from 'react-native';


//go to email screen
const NavigateToEmail = props =>{
    props.navigation.navigate('EmailScreen');
}

//go to sms screen
const NavigateToSMS = props =>{
    props.navigation.navigate('SendSMS');
}

//Home Component
const HomeScreen = props =>{
    return (
      <View style={styles.container}>
        <Text>Send my Info m_mayne139376</Text>
        <Button  title="Email my Info" onPress={()=>NavigateToEmail(props)}></Button>
        <Button  title="SMS my Info" onPress={()=>NavigateToSMS(props)}></Button>
      </View>
    );
  };

  export default HomeScreen;

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5A9CB',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });