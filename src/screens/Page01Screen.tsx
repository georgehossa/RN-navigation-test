import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {theme} from '../theme/DefaultTheme';

interface Props extends NativeStackScreenProps<any, any> {}

const Page01Screen = ({navigation}: Props) => {
  return (
    <View style={theme.globalMargin}>
      <Text>Page 01</Text>
      <Button
        title="Go to Page 02"
        onPress={() => navigation.navigate('Page02')}
      />
      <Text>Navigating with arguments:</Text>
      <View style={theme.buttonsContainer}>
        <TouchableOpacity
          style={[theme.personaButton, theme.backgroundColorOrange]}
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Peter',
              age: 40,
              color: theme.backgroundColorOrange,
            });
          }}>
          <Text style={theme.personaButtonText}>Peter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[theme.personaButton, theme.backgroundColorPurple]}
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Mary',
              age: 30,
              color: theme.backgroundColorPurple,
            });
          }}>
          <Text style={theme.personaButtonText}>Mary</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page01Screen;
