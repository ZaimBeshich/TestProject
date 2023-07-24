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
import { Input } from './Input';

// type InputProps = {
//   label: string;
//   value: string;
//   errorText: string | null;
//   isError: boolean;
//   keyboardType: KeyboardTypeOptions;
//   maxLength: number;
//   mask?: Mask;
//   inputName: string;
//   onFocus: (value: string, input: string) => void;
//   onChangeText: (value: string) => void;
// };

export const PhoneInput = (props) => {
  const { isFocused } = props;
  return <View>{isFocused ? <Input {...props} /> : <Input {...props} />}</View>;
};
