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

export const Confirm = () => {
  const onPress = () => {
    console.log('\n OK!');
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.outer}>
        <ImageBackground
          style={styles.img}
          resizeMode='cover'
          source={require('../components/svg/BG.png')}
        />
        <View style={styles.container}>
          <Lottie
            source={require('../components/lottie/successfully-done.json')}
            autoPlay
            loop
            style={styles.animated}
          />
          <Text style={styles.title}>Готово!</Text>
          <Text style={styles.subTitle}>
            {`Заявка отправлена. Мы с вами свяжемся\nв ближайший час.`}
          </Text>
          <Button disabled={false} title='Ок' onPress={onPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    // backgroundColor: COLORS.light_BG,
  },
  outer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // color: 'transparent',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_BG,
  },
  title: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: Raleway_600,
    fontSize: 24,
    lineHeight: 33,
  },
  subTitle: {
    color: COLORS.grey,
    textAlign: 'center',
    fontFamily: Raleway_400,
    fontSize: 15,
    lineHeight: 21,
  },
  animated: {
    width: 25,
  },
});
