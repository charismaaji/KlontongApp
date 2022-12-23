import {StyleSheet} from 'react-native';
import {colors} from './Colors';

export const GlobalStyle = StyleSheet.create({
  shadow2: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: colors.white,
  },
});
