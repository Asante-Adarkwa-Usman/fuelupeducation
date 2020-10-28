import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
}
from 'react-native';
import Animated from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {  Button  } from 'react-native-paper';

const Account = () => {

    return(
        <Animated.View style={styles.container}>
           <Text style={styles.getStartedText}> Account created{'\n'} successfully!</Text>
           <View style={{flex: 1, alignSelf:  'center'  }}>
              <Image 
                style={styles.imageStyle}
                source={require('../assets/start.jpg')}
              />
            </View>
           <View style={{flex: 1, alignSelf: 'center' }}>
               <Text style={styles.mainTextStyle}>Happy learnig, study from anywhere {'\n'}
                            And everywhere.
              </Text>
           </View>
           <View style={styles.buttonContainer}> 
              <Button 
                style={{backgroundColor: '#f16711', color: '#ffffff'}}  
                uppercase={false}      
                mode="contained" 
                onPress={() => console.log('Pressed')}>
                    Continue
              </Button>  
           </View>
        </Animated.View>
        );
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignSelf:  'center'
    },

    getStartedText: {
        flex:1,
        alignSelf: 'center', 
        color: '#4f0ea2',
        textAlign:'center',
        marginTop: 60,
        fontFamily: 'sans-serif',
        fontWeight:'bold', 
        fontSize: 30
    },

    imageStyle: {

         width: wp('100'),
         height: hp('25'),
         resizeMode: 'contain',
    },

    mainTextStyle: {
        textAlign:'center',
        fontWeight: "400",
        fontSize: 18,
        marginTop: 30

    },

    buttonContainer: {
       flex:1, 
       alignSelf: 'center', 
       width: wp('80')
    }
});