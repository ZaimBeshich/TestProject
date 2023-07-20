import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirm } from './src/screens/Confirm';
import { Form } from './src/screens/Form/Form';
import { Header } from './src/components/Header';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'FormScreen'}>
        <Stack.Screen
          name='FormScreen'
          component={Form}
          options={{ headerLeft: (props) => <Header {...props} /> }}
        />
        <Stack.Screen
          name='Confirm'
          component={Confirm}
          options={{ headerLeft: (props) => <Header {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
