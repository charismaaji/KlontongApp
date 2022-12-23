import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils';
import {ButtonComponent} from '../button';
import {TextInputComponentProps} from './TextInput.config';

const TextInputButtonComponent = ({
  placeholder,
  backgroundColor,
  borderColor,
  width,
  height,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  multiline,
  onSubmitEditing,
  onPressButton,
}: TextInputComponentProps) => {
  return (
    <View style={styles.wrapperInput}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor ? borderColor : colors.grey,
            width: width,
            height: height,
          },
        ]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      <ButtonComponent title="Search" onPress={onPressButton} />
    </View>
  );
};
export default TextInputButtonComponent;

const styles = StyleSheet.create({
  wrapperInput: {
    marginTop: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    borderWidth: scale(1.5),
    borderRadius: scale(5),
    width: scale(235),
  },
  input: {
    width: scale(235),
    paddingVertical: Platform.OS === 'ios' ? scale(9) : scale(5),
    paddingHorizontal: scale(9),
  },
});
