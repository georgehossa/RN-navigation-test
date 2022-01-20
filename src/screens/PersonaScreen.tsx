import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';

interface Props
  extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route}: Props) => {
  const {name, age, color} = route.params;

  return (
    <View style={[styles.container, color]}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{age} Years</Text>
    </View>
  );
};

export default PersonaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 54,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20,
  },
});
