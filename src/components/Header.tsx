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

export const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle={'dark-content'} />
      <TouchableOpacity onPress={() => console.log(navigation)}>
        <ArrowLeft width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 40,
  },
});
