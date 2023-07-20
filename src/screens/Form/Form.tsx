import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { Checkbox } from '../../components/Checkbox';

export const Form = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    name: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.name) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      // register();
      console.log('\n make button active!!');
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Забронировать слот</Text>
          <Text style={styles.h2}>
            Оставьте контактные данные, и мы с вами свяжемся в ближайший час.
          </Text>

          <Input
            onChangeText={(text) => handleOnchange(text, 'name')}
            onFocus={() => handleError(null, 'name')}
            label='Имя'
            keyboardType={'default'}
            error={errors.name}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, 'e-mail')}
            onFocus={() => handleError(null, 'email')}
            label='E-mail'
            error={errors.email}
            keyboardType={'email-address'}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            label='Номер телефона'
            error={errors.phone}
            keyboardType='phone-pad'
          />
        </View>
        <View>
          <Button
            title='Отправить'
            // onPress={validate}
            onPress={() => navigation.navigate('Confirm')}
          />
          <Checkbox
            text='Я даю согласие на обработку своих данных.'
            onPress={() => console.log('\n checkbox')}
            isChecked={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
