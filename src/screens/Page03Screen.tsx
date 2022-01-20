import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {theme} from '../theme/DefaultTheme';

interface Props extends NativeStackScreenProps<any, any> {}

const Page03Screen = ({navigation}: Props) => {
  return (
    <View style={theme.globalMargin}>
      <Text>Page 03</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page03Screen;
