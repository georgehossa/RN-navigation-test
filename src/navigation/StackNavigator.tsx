import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page01Screen from '../../src/screens/Page01Screen';
import Page02Screen from '../../src/screens/Page02Screen';
import Page03Screen from '../../src/screens/Page03Screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page01" component={Page01Screen} />
      <Stack.Screen name="Page02" component={Page02Screen} />
      <Stack.Screen name="Page03" component={Page03Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
