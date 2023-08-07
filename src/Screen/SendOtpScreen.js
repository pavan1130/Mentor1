import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const SendOtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOTP] = useState('');

  const handleOTPChange = text => {
    // We'll limit the OTP field to 6 digits for this example
    setOTP(text.replace(/[^0-9]/g, '').slice(0, 6));
  };

  const handleSendOTP = () => {
    // Handle sending OTP logic here
    console.log('Sending OTP:', otp);
  };

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
        source={require('./logimg/log&sign.png')}
        style={[
          styles.backgroundImage,
          {marginTop: isKeyboardVisible ? -320 : -90},
        ]}>
        <View style={styles.container}>
          <Text style={styles.heading}>Enter OTP</Text>

          <Text style={styles.headerText}>
            To complete your login, please enter the 6-digit OTP sent to your
            mobile device.
          </Text>

          <View style={styles.otpContainer}>
            {/* Create 6 TextInput fields to enter each digit of the OTP */}
            {[1, 2, 3, 4, 5, 6].map(index => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index - 1] || ''}
                onChangeText={text => handleOTPChange(text, index)}
              />
            ))}
          </View>

          <LinearGradient // Wrap the TouchableOpacity with LinearGradient
            colors={['#FF2063', '#FF0000']} // Specify the gradient colors
            start={{x: 0, y: 0.5}} // Specify the start and end points for the gradient
            end={{x: 1, y: 0.5}}
            style={styles.sendOTPButton}>
            <TouchableOpacity onPress={handleSendOTP}>
              <Text
                style={styles.sendOTPButtonText}
                onPress={() => navigation.navigate('ResetPassword')}>
                Send OTP
              </Text>
            </TouchableOpacity>
          </LinearGradient>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // Add a transparent background to make the text readable
  },
  innerBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 420,
  },

  heading: {
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: '700',
    color: '#303A47',
    marginBottom: 20,
    marginRight: 220,
    lineHeight: 34,
    letterSpacing: 0,
    marginTop: -100,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 50,
    alignSelf: 'flex-start',
    letterSpacing: 0,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 18,
    marginBottom: 20,
  },
  sendOTPButton: {
    backgroundColor: '#FF2063',
    borderRadius: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 56,
    width: 318,
    height: 52,
  },
  sendOTPButtonText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default SendOtpScreen;
