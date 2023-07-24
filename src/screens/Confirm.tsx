import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import COLORS from '../constants/colors';
import { Button } from '../components/Button';
import { Raleway_400, Raleway_600 } from '../constants/fonts';
import Lottie from 'lottie-react-native';
import { BlurView, VibrancyView } from '@react-native-community/blur';
import { BackgroundContainer } from '../components/BackgroundContainer';

export const Confirm = () => {
  const onPress = () => {
    console.log('\n OK!');
  };
  return (
    <BackgroundContainer>
      <Lottie
        source={require('../components/lottie/successfully-done.json')}
        autoPlay
        loop={false}
        style={styles.animated}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Готово!</Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          {`Заявка отправлена. Мы с вами свяжемся\nв ближайший час.`}
        </Text>
        <Button disabled={false} title='Ок' onPress={onPress} />
      </View>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: Raleway_600,
    fontSize: 24,
    lineHeight: 33,
  },
  subTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  subTitle: {
    color: COLORS.grey,
    textAlign: 'center',
    fontFamily: Raleway_400,
    fontSize: 15,
    lineHeight: 21,
  },
  animated: {
    bottom: 100,
  },
});
