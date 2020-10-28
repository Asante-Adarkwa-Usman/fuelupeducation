import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  TextInput,
  IconButton,
  Button,
  Provider as PaperProvider,
} from 'react-native-paper';


const Signup = () => {
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    
      <PaperProvider>
        <Animated.View style={styles.container}>
          <View style={styles.firstContainer}>

          </View>
          <View style={styles.thirdContainer}>
            <TextInput
              mode= 'outlined'
              placeholder='Email or Mobile number'
              placeholderTextColor= '#A0A0A0'
              theme={{ colors: { primary: '#4f0ea2', accent:'#4285F4'}}}
              label="Email or Mobile number"
              clearButtonMode="always"
              value={text}
               onChangeText={text => setText(text)}
           />
            <TextInput
              style={{marginTop:10,marginBottom:10}}
              mode= 'outlined'
              placeholder='Enter Password'
              placeholderTextColor= '#A0A0A0'
              theme={{ colors: { primary: '#4f0ea2',accent:'#4285F4'}}}
              label="Password"
              minLenght={8}
              value={password}
              secureTextEntry={true}
              clearButtonMode="always"
               onChangeText={password => setPassword(password)}
         />
           <TextInput
              style={{marginTop:10,marginBottom:10}}
              mode= 'outlined'
              placeholder='Remember Password'
              placeholderTextColor= '#A0A0A0'
              theme={{ colors: { primary: '#4f0ea2',accent:'#4285F4'}}}
              label="Remember Password"
              minLenght={8}
              value={password}
              secureTextEntry={true}
              clearButtonMode="always"
               onChangeText={password => setPassword(password)}
         />
           <Button 
              style={{backgroundColor: '#f16711', color: '#ffffff'}}
              uppercase={false}
              mode="contained" 
              onPress={() => console.log('Pressed')}>
                  Create account
            </Button>
          </View>
          <Text style={styles.signInText}> or sign up with</Text>
           <View style={styles.buttonContainer}>
            <IconButton 
              icon='google'
              color={'#e94232'}
              size={30}
              onPress={() => console.log('Pressed')}
            />
            <IconButton 
              icon='facebook'
              color={'#4285F4'}
              size={30}
              onPress={() => console.log('Pressed')}
            />
            <IconButton
              icon="twitter"
              color={'#4285F4'}
              size={30}
              onPress={() => console.log('Pressed')}
            />
           </View>
        </Animated.View>
      </PaperProvider>
  
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignSelf:  'center' 
  },

  firstContainer: {
    height: hp('30'),
    width: wp('100'),
    backgroundColor: '#d1d2fd',
    borderBottomRightRadius: 160,
    borderBottomLeftRadius: 160
  },

  thirdContainer: {
    flex:1,
    alignSelf: 'center',
    height: hp('10'),
    width: wp('80'),
    padding: 10,
    fontSize: 18,
    
  },

  buttonContainer: {
    
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30

  },

  signInText: {
    
    alignSelf:'center', 
    fontSize: 17,
    marginTop: 10, 
    fontWeight: '400'
  }
});