import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
const slides = [
  {
    image: require('./logimg/task1.png'),
    caption: 'Step 1',
    content: 'Invite the mentor to the meeting',
  },
  {
    image: require('./logimg/task3.png'),
    caption: 'Step 2',
    content: 'Invite the mentor to the meeting',
  },
  {
    image: require('./logimg/task2.png'),
    caption: 'Step 3',
    content: 'Begin your mentoring journey',
  },
];

const OnboardingScreen = () => {
  const renderSlide = ({item}) => (
    <View style={styles.slideContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.caption}>{item.caption}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const carouselRef = React.useRef(null);

  const onSkipPress = () => {
    navigation.navigate('Login');
  };
  const onSkipPresss = () => {
    navigation.navigate('Login');
  };

  const onPreviousPress = () => {
    carouselRef.current.snapToPrev();
  };

  const onNextPress = () => {
    carouselRef.current.snapToNext();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={onSkipPress}>
        <Text style={styles.skipText} onPress={onSkipPresss}>
          Skip
        </Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        data={slides}
        renderItem={renderSlide}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={index => setActiveSlide(index)}
        layout="default"
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.line}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
      <View style={styles.navigationButtonsContainer}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={onPreviousPress}>
          <Image
            source={require('./logimg/pre.png')}
            style={styles.arrowIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={onNextPress}>
          <Image
            source={require('./logimg/next.png')}
            style={styles.arrowIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
  },
  image: {
    flex: 1,
    width: 280,
    height: 280,
    top: 242,
    resizeMode: 'contain',
    marginTop: -40,
  },
  caption: {
    width: 282,
    height: 69,
    color: '#303A47',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: 'center',
    marginTop: 260,
  },
  content: {
    width: 282,
    height: 69,
    color: '#303A47',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: 'center',
  },
  skipButton: {
    position: 'absolute',
    width: 98,
    height: 48,
    top: 40,
    left: 292,
    borderRadius: 40,
    padding: '12px 24px',
    backgroundColor: '#303A47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 18,
    color: '#fff',
  },
  paginationContainer: {
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  paginationContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 40,
    height: 3,
    borderRadius: 2,
    marginHorizontal: 2,
    backgroundColor: '#303A47',
    top: -70,
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -40,
  },
  navigationButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  arrowIcon: {
    width: 70,
    height: 70,
  },
});

export default OnboardingScreen;
