import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirm } from './src/screens/Confirm';
import { Form } from './src/screens/Form/Form';
import { Header } from './src/components/Header';
import COLORS from './src/constants/colors';

const Stack = createNativeStackNavigator();

export const App = () => {
  const Theme = {
    dark: false,
    colors: {
      background: COLORS.light,
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        initialRouteName={'Form'}
        screenOptions={() => ({
          headerShown: false,
          headerLeft: (props) => <Header {...props} />,
        })}>
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Confirm' component={Confirm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
