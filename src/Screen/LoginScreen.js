import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({}) => {
  const navigation = useNavigation();

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for showing or hiding the password

  const handleLogin = () => {
    // Perform login logic here based on email and password
    // For this example, let's just log the entered email and password
    console.log('Email ID:', email);
    console.log('Password:', password);

    // Navigate to the Home screen (Replace this with actual login logic)
    navigation.navigate('Home');
  };
  const handleAppleLink = () => {
    Linking.openURL('https://www.apple.com');
  };
  const handleGoogleLink = () => {
    Linking.openURL('https://www.google.com');
  };

  const handleLinkedInLink = () => {
    Linking.openURL('https://www.linkedin.com');
  };

  return (
    <ImageBackground
      source={require('./logimg/bg.png')}
      style={styles.innerBackground}>
      <ImageBackground
        source={require('./logimg/log&sign.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.heading}>Login</Text>

          <View style={styles.inputContainer1}>
            <Image
              source={require('./logimg/@.png')}
              style={[styles.inputIcon, {tintColor: '#1C1B1F'}]}
            />
            <TextInput
              style={styles.inputemail}
              placeholder="Email ID"
              keyboardType="email-address"
              // Bind the 'email' state to the TextInput value
              value={email}
              onChangeText={text => setEmail(text)}
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
                style={[
                  styles.showPasswordIcon,
                  {
                    tintColor: showPassword ? '1C1B1F' : '1C1B1F',
                  },
                ]}
              />
            </TouchableOpacity>
          </View>

          {/* Forget Password Section */}
          <TouchableOpacity
            style={styles.forgetPasswordButton}
            onPress={handleForgotPasswordPress}>
            <Text style={styles.forgetPasswordButtonText}>Forgot Password</Text>
          </TouchableOpacity>
          <LinearGradient // Wrap the TouchableOpacity with LinearGradient
            colors={['#FF2063', '#FF0000']} // Specify the gradient colors
            start={{x: 0, y: 0.5}} // Specify the start and end points for the gradient
            end={{x: 1, y: 0.5}}
            style={styles.loginButton}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.lineContainer}>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.lineText}>Or</Text>
            <View style={styles.horizontalLine}></View>
          </View>

          <View style={styles.container}>
            <View style={styles.iconRow}>
              <TouchableOpacity onPress={handleAppleLink}>
                <Image source={require('./logimg/2.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleGoogleLink}>
                <Image source={require('./logimg/3.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLinkedInLink}>
                <Image source={require('./logimg/1.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.signupText}>
              New to our platform{'? '}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>
          </View>
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
    top: 130,
    marginTop: -20,
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
    paddingHorizontal: 10,
    // Add a transparent background to make the text readable
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 34,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    color: '#303A47',
    marginLeft: 20,
    marginTop: 235,
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
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputemail: {
    flex: 1,
    height: '100%',
    fontSize: 16,
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

  forgetPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: 10,
    marginRight: 30,
  },
  forgetPasswordButtonText: {
    color: '#FF2064',
    fontWeight: '700',
  },
  loginButton: {
    borderRadius: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 56,
    borderRadius: 16,
    marginTop: 10,
    width: 318,
    height: 52,
  },
  loginButtonText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 30,
  },
  lineText: {
    marginHorizontal: 2,
    fontSize: 16,
    color: '#000000',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: -170,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
    marginTop: -10,
  },
  signupText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#303A47',
    marginTop: 20,
  },
  signupLink: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FF2064',
    textDecorationLine: 'underline',
  },
});
export default LoginScreen;
