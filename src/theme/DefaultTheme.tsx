import {StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  globalMargin: {
    margin: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  personaButton: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    margin: 10,
  },
  backgroundColorOrange: {
    backgroundColor: 'darkorange',
  },
  backgroundColorPurple: {
    backgroundColor: 'purple',
  },
  personaButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
