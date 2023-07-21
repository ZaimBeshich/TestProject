import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { Raleway_600, Raleway_400 } from '../../constants/fonts';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    // marginTop: 16,
    // backgroundColor: 'green',
  },
  avoidKeyboard: {
    flex: 1,
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
});
