import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import COLORS from '../constants/colors';
import { Raleway_400, Raleway_500 } from '../constants/fonts';
import MaskInput, { Mask } from 'react-native-mask-input';
import { TextInput } from 'react-native-paper';

type InputProps = {
  label: string;
  value: string;
  errorText: string | null;
  isError: boolean;
  keyboardType: KeyboardTypeOptions;
  maxLength: number;
  mask?: Mask;
  inputName: string;
  defaultValue?: string;
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
    defaultValue,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const isBlueBorder = Boolean(value) || isFocused;

  const renderLabel = () => {
    return (
      <Text
        style={[
          styles.label,
          isBlueBorder && styles.labelInFocus,
          isError && styles.labelInFocus,
        ]}>
        {label}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {!mask ? (
        <TextInput
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          autoCorrect={false}
          spellCheck={false}
          value={value}
          caretHidden={false}
          cursorColor={COLORS.black}
          label={renderLabel()}
          mode={'flat'}
          underlineColor={COLORS.transparent}
          activeUnderlineColor={COLORS.transparent}
          activeOutlineColor={COLORS.transparent}
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
      ) : (
        <TextInput
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          autoCorrect={false}
          spellCheck={false}
          value={value}
          caretHidden={false}
          cursorColor={COLORS.black}
          label={renderLabel()}
          mode={'flat'}
          underlineColor={COLORS.transparent}
          activeUnderlineColor={COLORS.transparent}
          activeOutlineColor={COLORS.transparent}
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
          defaultValue={defaultValue}
          render={(props) => <MaskInput {...props} mask={mask} />}
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
  },
  labelInFocus: {
    color: COLORS.grey,
    lineHeight: 16,
    letterSpacing: 0,
  },
  input: {
    fontFamily: Raleway_500,
    color: COLORS.black,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  inputInFocus: {
    borderWidth: 1,
    borderColor: COLORS.blue,
  },
  inputInError: {
    borderWidth: 1,
    borderColor: COLORS.red,
  },
  errorText: {
    color: COLORS.red,
    fontFamily: Raleway_400,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.78,
    marginLeft: 15,
    marginTop: 8,
  },
});
