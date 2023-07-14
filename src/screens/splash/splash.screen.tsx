import {View, Text, Image, Animated, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import SplashImage from '../../../assets/splashimage.jpeg';
import {Button} from 'react-native-paper';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {selectIsFirstTimeOpen} from '../../store/news/news.selector';
import {setIsFirstTimeOpenAsync} from '../../store/news/news.action';
import {useAppDispatch} from '../../utils/reducer/reducerHooks.utils';
import {NavigationType} from '../../components/news-list/news-list.component';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../utils/globalStyles/globalStyles.utils';
import {height, isIos} from '../../utils/utils';
const SplashScreen = () => {
  const dispatch = useAppDispatch();
  const navigation: NavigationType = useNavigation();
  const isFirstTimeOpen = useSelector(selectIsFirstTimeOpen);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isFirstTimeOpen) {
      navigation.push('HomeScreen');

      // const nextScreen = setTimeout(() => {
      //   navigation.push('HomeScreen');
      // }, 2000);

      // return () => {
      //   clearTimeout(nextScreen);
      // };
    }
  }, [isFirstTimeOpen]);
  useEffect(() => {
    fadeIn();
  }, [fadeAnim]);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = async () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const setIsFirstTimeOpen = () => {
    fadeOut();

    setTimeout(() => {
      dispatch(setIsFirstTimeOpenAsync(false));
    }, 2000);
  };
  return (
    <View style={{...globalStyles.container, padding: 10}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Animated.View
          style={{
            ...styles.imageContainer,
            opacity: fadeAnim,
          }}>
          <Animated.Image
            source={SplashImage}
            style={{
              ...styles.image,
              opacity: fadeAnim,
            }}
          />
        </Animated.View>

        <Animated.View
          style={{
            ...styles.textContainer,
            opacity: fadeAnim,
          }}>
          <Text
            style={{
              ...styles.title,
            }}>
            Your Daily Dose of News is in your hands
          </Text>
          <Text
            style={{
              ...styles.text,
            }}>
            Great App to search, take your time to read a little more about news
            that interest you the most
          </Text>
          <Button
            buttonColor={'#fb6a00'}
            textColor={'#fff'}
            style={styles.searchButton}
            labelStyle={{
              ...styles.buttonLabel,
            }}
            mode="contained"
            onPress={setIsFirstTimeOpen}>
            Get Started
          </Button>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default SplashScreen;
