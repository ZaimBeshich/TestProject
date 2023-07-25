import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  ImageBackground,
} from 'react-native';
import COLORS from '../constants/colors';
import { BlurView } from '@react-native-community/blur';

export const BackgroundContainer = (props) => {
  const isIos = Platform.OS === 'ios';

  return isIos ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg} />
      <BlurView blurType='light' blurAmount={32} style={styles.absolute} />
      {props.children}
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./img/BG.png')}
        resizeMode='cover'
        style={styles.img}>
        {props.children}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_light,
  },
  img: {
    flex: 1,
  },
  bg: {
    position: 'absolute',
    bottom: 120,
    left: 200,
    width: 510,
    height: 510,
    backgroundColor: COLORS.BG_purple,
    borderRadius: 300,
    opacity: 0.16,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
