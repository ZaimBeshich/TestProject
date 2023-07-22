import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirm } from './src/screens/Confirm';
import { Form } from './src/screens/Form/Form';
import { Header } from './src/components/Header';
import { TouchableOpacity } from 'react-native';
import ArrowLeft from './src/components/svg/arrowLeft';

const Stack = createNativeStackNavigator();

export const App = () => {
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'FormScreen'}
        // options={() => ({
        //   headerTransparent: true,
        //   headerLeft: (props) => <Header {...props} />,
        // })}
        screenOptions={() => ({
          headerTransparent: true,
          headerLeft: (props) => <Header {...props} />,
        })}>
        <Stack.Screen
          name='FormScreen'
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
