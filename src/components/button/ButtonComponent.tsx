import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils';
import {ButtonComponentProps} from './Button.config';

const ButtonComponent = ({onPress, title, disabled}: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: disabled ? colors.darkGrey : colors.green},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10),
    borderRadius: scale(5),
  },
  textButton: {
    fontWeight: '600',
    color: colors.white,
    fontSize: scale(14),
  },
});

export default ButtonComponent;
