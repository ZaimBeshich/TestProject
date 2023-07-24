import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import { Raleway_500 } from '../constants/fonts';

import * as Animatable from 'react-native-animatable';

type ButtonProps = {
  title: string;
  disabled: boolean;
  isLoading?: boolean;
  onPress: () => void;
};

export const Button = (props: ButtonProps) => {
  const { title, disabled, onPress, isLoading } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled]}
      disabled={disabled}>
      {isLoading ? (
        <Animatable.Image
          source={require('../components/img/Loader.png')}
          animation={'rotate'}
          duration={1000}
          iterationDelay={0}
          easing={'linear'}
          useNativeDriver={true}
          iterationCount={'infinite'}
          style={{ width: 16, height: 16 }}
        />
      ) : (
        <Text style={styles.buttonLabel}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.blue,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 17,
  },
  buttonDisabled: {
    backgroundColor: COLORS.purple,
  },
  buttonLabel: {
    color: COLORS.light,
    fontFamily: Raleway_500,
    fontSize: 15,
    lineHeight: 21,
  },
});
