import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';
import { Raleway_600, Raleway_400 } from '../../constants/fonts';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    // height: '100%',
    // backgroundColor: 'red',
    // backgroundColor: COLORS.white,
  },
  avoidKeyboard: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'green',
    // justifyContent: 'flex-start',
    justifyContent: 'flex-end',
    // justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: COLORS.white,
    // marginTop: 16,
    // backgroundColor: 'yellow',
  },

  inputs: {
    flex: 1,
    // justifyContent: 'space-between',
    // backgroundColor: 'yellow',
  },
  h1: {
    fontFamily: Raleway_600,
    color: COLORS.black,
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
  h2: {
    fontFamily: Raleway_400,
    color: COLORS.grey,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.light_BG,
    // zIndex: 1,
    // flex: 1,
  },
});
