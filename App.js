import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirm } from './src/screens/Confirm';
// import Confirm from './src/screens/Confirm';
import { Form } from './src/screens/Form/Form';
import { Header } from './src/components/Header';
import { BackgroundContainer } from './src/components/BackgroundContainer';
import { ImageBackground, TouchableOpacity } from 'react-native';
import ArrowLeft from './src/components/svg/arrowLeft';
import COLORS from './src/constants/colors';

const Stack = createNativeStackNavigator();

export const App = () => {
  // const navigation = useNavigation();

  const Theme = {
    dark: false,
    colors: {
      background: COLORS.light, //НУЖЕН ЭТОТ
      // background: 'lightgreen',
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        // initialRouteName={'ConfirmScreen'}
        initialRouteName={'Form'}
        // options={() => ({
        //   headerTransparent: true,
        //   headerLeft: (props) => <Header {...props} />,
        // })}
        screenOptions={() => ({
          headerTransparent: true,
          headerLeft: (props) => <Header {...props} />,
        })}>
        <Stack.Screen
          name='Form'
          component={Form}
          // options={() => ({
          //   headerTransparent: true,
          //   headerLeft: (props) => <Header {...props} />,
          // })}
        />
        <Stack.Screen
          name='Confirm'
          component={Confirm}
          // options={() => ({
          //   headerTransparent: true,
          //   headerLeft: (props) => <Header {...props} />,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
