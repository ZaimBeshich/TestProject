import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { Raleway_600, Raleway_400 } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  },
});
