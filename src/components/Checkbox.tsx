import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import COLORS from '../constants/colors';
import { Raleway_300 } from '../constants/fonts';
import CheckboxFilled from './svg/checkboxFilled';
import CheckboxEmpty from './svg/checkboxEmpty';

type CheckboxProps = { text: string; onPress: () => void; isChecked: boolean };

export const Checkbox = ({ text, onPress, isChecked }: CheckboxProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
        {isChecked ? (
          <CheckboxFilled width={24} height={24} />
        ) : (
          <CheckboxEmpty width={24} height={24} />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 12,
  },

  text: {
    fontFamily: Raleway_300,
    color: COLORS.grey,
    fontSize: 13,
  },
});
