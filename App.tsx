import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigation/StackNavigator';
import BasicDrawer from './src/navigation/BasicDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <BasicDrawer />
    </NavigationContainer>
  );
};

export default App;
