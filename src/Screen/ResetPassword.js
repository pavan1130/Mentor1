import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleResetpassword = () => {
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
          {marginTop: isKeyboardVisible ? -320 : -90},
        ]}>
        <View style={styles.container}>
          <Text style={styles.heading}>Reset Password</Text>

          <View style={styles.passwordContainer1}>
            <Image
              source={require('./logimg/lock.png')}
              style={[styles.inputIcon]}
            />
            <TextInput
              style={styles.passwordInput1}
              keyboardType="Password"
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
              keyboardType="Confirm Password"
              placeholder="Confirm Password"
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

          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetpassword}>
            <Text style={styles.resetButtonText}>Submit</Text>
          </TouchableOpacity>
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
    top: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -120,
  },
  innerBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 420,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },

  resetButton: {
    backgroundColor: '#FF2064',
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 30,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 10,
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
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default ResetPassword;
