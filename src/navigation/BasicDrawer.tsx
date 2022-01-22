import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';

const {Navigator, Screen} = createDrawerNavigator();

const BasicDrawer = () => {
  return (
    <Navigator>
      <Screen name="Stack Navigation" component={StackNavigator} />
    </Navigator>
  );
};

export default BasicDrawer;
