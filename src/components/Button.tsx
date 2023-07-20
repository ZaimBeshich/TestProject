import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ButtonProps } from 'react-native';
import COLORS from '../constants/colors';
import { Raleway_500 } from '../constants/fonts';

export const Button = (props: ButtonProps) => {
  const { title, disabled, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled]}>
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
