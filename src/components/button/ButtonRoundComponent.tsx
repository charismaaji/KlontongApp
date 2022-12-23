import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils';
import {ButtonRoundComponentProps} from './Button.config';

const ButtonRoundComponent = ({onPress}: ButtonRoundComponentProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(60),
    height: scale(60),
    backgroundColor: colors.green,
    borderRadius: scale(60),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  text: {
    color: colors.white,
    fontSize: scale(40),
  },
});

export default ButtonRoundComponent;
