import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

const Page01Screen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Page 01</Text>
      <Button
        title="Go to Page 02"
        onPress={() => navigation.navigate('Page02')}
      />
    </View>
  );
};

export default Page01Screen;
