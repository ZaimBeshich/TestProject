import React, { Ref, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardTypeOptions,
  NativeMethods,
} from 'react-native';
import COLORS from '../constants/colors';
import { Raleway_400, Raleway_500 } from '../constants/fonts';
import MaskInput, { Mask } from 'react-native-mask-input';

type InputProps = {
  label: string;
  value: string;
  errorText: string | null;
  isError: boolean;
  keyboardType: KeyboardTypeOptions;
  maxLength: number;
  mask?: Mask;
  inputName: string;
  onFocus: (value: string, input: string) => void;
  onChangeText: (value: string) => void;
};

export const Input = (props: InputProps) => {
  const {
    label,
    keyboardType,
    onFocus,
    onChangeText,
    isError,
    errorText,
    maxLength,
    value,
    mask,
    inputName,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const isBlueBorder = Boolean(value) || isFocused;

  //TODO add animation to input
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          (isBlueBorder || isError) && styles.labelInFocus,
        ]}>
        {label}
      </Text>
      {mask ? (
        <MaskInput
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          autoCorrect={false}
          autoCapitalize={'none'}
          value={value}
          onFocus={() => {
            onFocus(value, inputName);
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          mask={mask}
          style={[
            styles.input,
            isBlueBorder && styles.inputInFocus,
            isError && styles.inputInError,
          ]}
        />
      ) : (
        <TextInput
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          autoCorrect={false}
          value={value}
          autoCapitalize={'none'}
          onFocus={() => {
            onFocus(value, inputName);
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            isBlueBorder && styles.inputInFocus,
            isError && styles.inputInError,
          ]}
        />
      )}
      {isError && <Text style={styles.errorText}>{errorText}</Text>}
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
    marginBottom: 8,
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
    marginLeft: 15,
  },
});
