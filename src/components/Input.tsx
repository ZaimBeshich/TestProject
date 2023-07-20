import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import { Raleway_400, Raleway_500 } from '../constants/fonts';

type InputProps = {
  label: string;
  error: string;
  keyboardType: string;
  onFocus: () => void;
};

export const Input = (props: InputProps) => {
  const { label, error, keyboardType, onFocus } = props;

  const isError = !!error;
  const [isFocused, setIsFocused] = React.useState(false);

  //add animation to input
  return (
    <View style={styles.container}>
      <Text style={[styles.label, isFocused && styles.labelInFocus]}>
        {label}
      </Text>
      <TextInput
        keyboardType={keyboardType}
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          isFocused && styles.inputInFocus,
          isError && styles.inputInError,
        ]}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 12,
    borderColor: 'red',
    marginHorizontal: 16,
    marginVertical: 8,
  },

  label: {
    color: COLORS.black,
    fontFamily: Raleway_500,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginLeft: 16,
    position: 'absolute',
    zIndex: 10,
    top: 20,
  },
  labelInFocus: {
    color: COLORS.grey,
    fontFamily: Raleway_500,
    fontSize: 12,
    lineHeight: 16,
    top: 5,
  },
  input: {
    color: COLORS.black,
    fontFamily: Raleway_500,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 26,
    paddingBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputInFocus: {
    borderColor: COLORS.blue,
  },
  inputInError: {
    borderColor: COLORS.red,
  },
  errorText: {
    color: COLORS.red,
    fontFamily: Raleway_400,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.78,
  },
});
