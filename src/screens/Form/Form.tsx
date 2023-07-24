import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { Checkbox } from '../../components/Checkbox';
import { emailValidation } from '../../helpers/emailValidation';
import { nameValidation } from '../../helpers/nameValidation';

import { MASKS } from '../../constants/masks';
import { phoneValidation } from '../../helpers/phoneValidation';
import { useNavigation } from '@react-navigation/native';
import { BackgroundContainer } from '../../components/BackgroundContainer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const Form: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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

  const [isChecked, setIsChecked] = useState(true);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isErrors = Object.values(errors).some((el) => el === true);
    const isInputsEmpty = Object.values(inputs).some((el) => el.length === 0);

    setIsButtonDisabled(isErrors || isInputsEmpty || !isChecked);
  }, [errors, isChecked]);

  const validate = (text, input) => {
    if (input === 'email') {
      handleError(!emailValidation(text), 'email');
      return;
    }
    if (input === 'name') {
      handleError(!nameValidation(text), 'name');
      return;
    }
    if (input === 'phone') {
      handleError(!phoneValidation(text), 'phone');
      return;
    }
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
    validate(text, input);
  };
  const handleError = (isError, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: isError }));
  };

  const submit = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.push('Confirm');
      setIsLoading(false);
    }, 2000); //mockValue
  };

  return (
    <BackgroundContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View>
              <Text style={styles.h1}>Забронировать слот</Text>
              <Text style={styles.h2}>
                Оставьте контактные данные, и мы с вами свяжемся в ближайший
                час.
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
                mask={MASKS.NAME_MASK}
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
                onFocus={validate}
                label='Номер телефона'
                value={inputs.phone}
                defaultValue='+7'
                inputName='phone'
                maxLength={18}
                keyboardType={'phone-pad'}
                isError={errors.phone}
                errorText={'Введите корректный номер телефона'}
                mask={MASKS.RU_PHONE}
              />
            </View>

            <View>
              <Button
                title='Отправить'
                onPress={submit}
                isLoading={IsLoading}
                // disabled={isButtonDisabled}
                disabled={false} //!
              />

              <Checkbox
                text='Я даю согласие на обработку своих данных.'
                onPress={handleCheckbox}
                isChecked={isChecked}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </BackgroundContainer>
  );
};
