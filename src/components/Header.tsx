import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import COLORS from '../constants/colors';
import { Navigation } from 'react-native-navigation';
import ArrowLeft from './svg/arrowLeft';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.canGoBack()
      ? navigation.goBack()
      : console.log('\n No previous screen!');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.transparent}
        barStyle={'dark-content'}
      />
      <TouchableOpacity onPress={onPress} style={styles.arrowContainer}>
        <ArrowLeft width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.transparent,
    width: 40,
  },
  arrowContainer: {
    marginLeft: 5,
  },
});
