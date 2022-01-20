import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {theme} from '../theme/DefaultTheme';

interface Props extends NativeStackScreenProps<any, any> {}

const Page02Screen = ({navigation}: Props) => {
  return (
    <View style={theme.globalMargin}>
      <Text>Page 02</Text>
      <Button
        title="Go to Page 03"
        onPress={() => navigation.navigate('Page03')}
      />
    </View>
  );
};

export default Page02Screen;
