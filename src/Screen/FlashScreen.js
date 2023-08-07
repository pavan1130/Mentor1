import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FlashScreen = ({navigation}) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0);
  const rotateAnim = new Animated.Value(0);
  const pulseAnim = new Animated.Value(0);
  const blinkAnim = new Animated.Value(2);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500, // Set the duration of the fade-in animation
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1500, // Set the duration of the scale animation
        easing: Easing.bezier(0.645, 0.045, 0.355, 1), // Custom easing for a slow reduction in speed
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000, // Set the duration of the rotation animation
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000, // Set the duration of the pulse animation
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 0,
            duration: 1000, // Set the duration of the pulse animation
            useNativeDriver: true,
          }),
        ]),
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(blinkAnim, {
            toValue: 1,
            duration: 1000, // Set the duration of the blink animation
            useNativeDriver: true,
          }),
          Animated.timing(blinkAnim, {
            toValue: 0,
            duration: 2000, // Set the duration of the blink animation
            useNativeDriver: true,
          }),
        ]),
      ),
    ]).start();

    setTimeout(() => {
      navigation.navigate('Onboarding'); // Navigate to the next screen after 3 seconds
    }, 3000);
  }, [fadeAnim, scaleAnim, rotateAnim, pulseAnim, blinkAnim, navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./logimg/Flashbg.jpg')}
        style={[styles.image, {width: '100%', height: '100%'}]}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(255, 32, 100, 0.7)', 'rgba(255, 0, 0, 0.6)']} // Specify the gradient colors here in RGBA format
          style={styles.gradient}>
          <Animated.View
            style={[
              styles.content,
              {
                transform: [
                  {scale: scaleAnim}, // Apply the scaling animation to the content
                  {
                    rotate: rotateAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'], // Rotate the logo during the animation
                    }),
                  },
                ],
              },
            ]}>
            <Animated.Image
              source={require('./logimg/Flashlogo.png')}
              style={[
                styles.icon,
                {
                  opacity: blinkAnim, // Apply the blinking animation to the logo
                  transform: [
                    {
                      translateY: scaleAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [100, 0], // Move the logo up during the scaling animation
                      }),
                    },
                  ],
                },
              ]}
            />
            <Animated.Text
              style={[
                styles.text,
                {
                  transform: [
                    {
                      scale: pulseAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.1], // Apply the pulse animation to the text
                      }),
                    },
                  ],
                },
              ]}>
              Mentor App
            </Animated.Text>
          </Animated.View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',

    fontStyle: 'italic',
  },
});

export default FlashScreen;
