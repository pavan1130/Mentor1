import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';
import {Button, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleSignup = () => {
    // Perform login logic here based on email and password
    // For this example, let's just log the entered email and password
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Mobile Number:', mobile);
    console.log('Password:', password);
    console.log('Confirmed Password:', confirmedpassword);
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
          {marginTop: isKeyboardVisible ? -360 : -90},
        ]}>
        <View style={styles.container}>
          <Text style={styles.textsignup}>Sign Up</Text>

          <View style={styles.inputContainer1}>
            <Image
              source={require('./logimg/face.png')}
              style={[styles.inputIcon]}
            />
            <TextInput
              placeholder="Full Name"
              keyboardType="Full Name"
              style={styles.input}
              value={fullname}
              onChangeText={text => setFullname(text)}
            />
          </View>

          <View style={styles.inputContainer1}>
            <Image
              source={require('./logimg/email.png')}
              style={[styles.inputIcon]}
            />
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              keyboardType="email-address"
              // Bind the 'email' state to the TextInput value
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer1}>
            <Image
              source={require('./logimg/call.png')}
              style={[styles.inputIcon]}
            />
            <TextInput
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              style={styles.input}
              value={mobile}
              onChangeText={text => setMobile(text)}
            />
          </View>
          <View style={styles.passwordContainer1}>
            <Image
              source={require('./logimg/lock.png')}
              style={[styles.inputIcon]}
            />
            <TextInput
              style={styles.passwordInput1}
              placeholder="Password"
              keyboardType="Password"
              secureTextEntry={!showPassword} // Show or hide the password based on the showPassword state
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  showPassword
                    ? require('./logimg/open-eye.png') // Eye icon when the password is visible
                    : require('./logimg/close-eye.png') // Eye icon when the password is hidden
                }
                style={[styles.showPasswordIcon]}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer1}>
            <Image
              source={require('./logimg/lock.png')}
              style={[styles.inputIcon]}
            />

            <TextInput
              style={styles.passwordInput1}
              placeholder="Confirm Password"
              keyboardType="Confirm Password"
              secureTextEntry={!showPassword1} // Show or hide the password based on the showPassword state
              value={confirmedpassword}
              onChangeText={text => setConfirmedPassword(text)}
            />

            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword1(!showPassword1)}>
              <Image
                source={
                  showPassword1
                    ? require('./logimg/open-eye.png') // Eye icon when the password is visible
                    : require('./logimg/close-eye.png') // Eye icon when the password is hidden
                }
                style={[styles.showPasswordIcon]}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.termsContainer}>
            <Paragraph>
              By signing up, you're agree to our{' '}
              <Text style={styles.termsLink} onPress={() => {}}>
                Terms and Conditions ,
              </Text>
              and{' '}
              <Text style={styles.termsLink} onPress={() => {}}>
                Privacy policy
              </Text>
            </Paragraph>
          </View>

          <Button
            mode="contained"
            style={styles.signUpButton}
            buttonColor="#FF2064"
            onPress={handleSignup}>
            Sign Up
          </Button>

          <View style={styles.loginContainer}>
            <Text>Already an app user? </Text>
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textsignup: {
    fontFamily: 'Montserrat',
    fontSize: 25,
    fontWeight: '700',
    color: '#303A47',
    marginRight: 280,
    lineHeight: 29,
    letterSpacing: 0,
    marginBottom: 20,
    marginTop: 40,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 800,
    top: 150,
  },
  innerBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 420,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  termsContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  termsLink: {
    color: '#FF2064',
  },
  signUpButton: {
    width: '60%',
    marginBottom: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginLink: {
    color: '#FF2064',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 10,
  },
  passwordContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInput1: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  showPasswordButton: {
    padding: 8,
    borderLeftWidth: 1, // Add a border on the left to separate the icon
    borderColor: '#EAEAEA', // Border color same as the container border
  },
  showPasswordIcon: {
    width: 20,
    height: 20,
  },
});

export default SignupScreen;
