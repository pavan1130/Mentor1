import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={require('./logimg/bg.png')}
      style={styles.innerBackground}>
      <ImageBackground
        source={require('./logimg/fblogo.png')}
        style={[
          styles.backgroundImage,
          {marginTop: isKeyboardVisible ? -320 : -90},
        ]}>
        <View style={styles.container}>
          <Text style={styles.heading}>Forgot Password?</Text>
          <Text style={styles.description}>
            Oops! It seems like you've forgotten your password. Don't worry,
            we've got you covered
          </Text>
          <View style={styles.inputContainer}>
            <Image
              source={require('./logimg/@.png')}
              style={styles.inputIcon}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter mobile / Email ID"
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity style={styles.sendOTPButton}>
            <LinearGradient
              colors={['#FF2063', '#FF0000']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.sendOTPGradient}>
              <Text
                style={styles.sendOTPText}
                onPress={() => navigation.navigate('Send')}>
                Send OTP
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            Already have an account{'? '}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 800,
    top: 180,
  },
  innerBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 420,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -90,
  },
  heading: {
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: '700',
    color: '#303A47',
    right: 50,
    paddingBottom: 20,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#303A47',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  inputContainer: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  sendOTPButton: {
    borderRadius: 8,
    overflow: 'hidden',
    width: '80%',
    height: 52,
    borderRadius: 15,
  },
  sendOTPGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendOTPText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#303A47',
    marginTop: 30,
  },
  loginLink: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    color: '#FF2064',
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
