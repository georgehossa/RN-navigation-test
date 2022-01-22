import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page01Screen from '../../src/screens/Page01Screen';
import Page02Screen from '../../src/screens/Page02Screen';
import Page03Screen from '../../src/screens/Page03Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  Page01: undefined;
  Page02: undefined;
  Page03: undefined;
  PersonaScreen: {
    id: number;
    name: string;
    age: number;
    color: {
      backgroundColor: string;
    };
  };
};

const {Navigator, Screen} = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Page01" component={Page01Screen} />
      <Screen name="Page02" component={Page02Screen} />
      <Screen name="Page03" component={Page03Screen} />
      <Screen name="PersonaScreen" component={PersonaScreen} />
    </Navigator>
  );
};

export default StackNavigator;
