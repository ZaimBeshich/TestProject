import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { Checkbox } from '../../components/Checkbox';
import { emailValidation } from '../../helpers/emailValidation';
import { nameValidation } from '../../helpers/nameValidation';
import { nameMask } from '../../helpers/masks';

export const Form = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {});

  const validate = (text, input) => {
    // console.log('\n validate: \n', 'text: ', text, ' input: ', input);
    // Keyboard.dismiss();
    let isValid = true;

    if (input === 'email') {
      handleError(!emailValidation(text), 'email');
    }

    if (input === 'name') {
      handleError(!nameValidation(text), 'name');
    }

    // if (!inputs.name) {
    //   handleError('Please input fullname', 'fullname');
    //   isValid = false;
    // }

    // if (!inputs.phone) {
    //   handleError('Please input phone number', 'phone');
    //   isValid = false;
    // }

    // if (isValid) {
    //   // register();
    //   console.log('\n make button active!!');
    // }
  };

  const handleOnChange = (text, input) => {
    // switch (input) {
    //   case 'name':
    //     console.log('switch');
    //     text = text.replace(/[^а-я]/gi, '');
    //     break;
    //   case 'phone':
    //     console.log('\n handkeChange phone: ', text);
    //     break;
    // }
    console.log('\n handleOnChange ->\n text: ', text, '\n input:', input);
    setInputs((prevState) => ({ ...prevState, [input]: text }));
    validate(text, input);
  };
  const handleError = (isError, input) => {
    // console.log('\n handleError ->\n error: ', isError, '\n input:', input);
    setErrors((prevState) => ({ ...prevState, [input]: isError }));
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={styles.container}
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.avoidKeyboard}>
          <Text style={styles.h1}>Забронировать слот</Text>
          <Text style={styles.h2}>
            Оставьте контактные данные, и мы с вами свяжемся в ближайший час.
          </Text>

          <Input
            onChangeText={(text) => handleOnChange(text, 'name')}
            onFocus={validate}
            value={inputs.name}
            label='Имя'
            inputName='name'
            keyboardType={'default'}
            maxLength={11}
            isError={errors.name}
            errorText={'Введите корректное имя'}
            mask={nameMask}
          />

          <Input
            onChangeText={(text) => handleOnChange(text, 'email')}
            onFocus={validate}
            value={inputs.email}
            inputName='email'
            label='E-mail'
            maxLength={31}
            keyboardType={'email-address'}
            isError={errors.email}
            errorText={'Введите корректный e-mail'}
          />
          <Input
            onChangeText={(text) => handleOnChange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            label='Номер телефона'
            // error={errors.phone}
            keyboardType={'phone-pad'}
          />

          <Button
            title='Отправить'
            // onPress={validate}
            // onPress={() => navigation.navigate('Confirm')}
            onPress={() => emailValidation(inputs.email)}
            disabled={false}
          />
        </KeyboardAvoidingView>

        <Checkbox
          text='Я даю согласие на обработку своих данных.'
          onPress={() => console.log('\n checkbox')}
          isChecked={true}
        />
      </View>
    </SafeAreaView>
  );
};
