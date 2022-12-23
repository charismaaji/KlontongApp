import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils';
import {TextInputComponentProps} from './TextInput.config';

const TextInputComponent = ({
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
  placeholderInput,
}: TextInputComponentProps) => {
  return (
    <View style={styles.wrapperInput}>
      <Text style={styles.textTitle}>{placeholder}</Text>
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
          placeholder={placeholderInput}
          placeholderTextColor={colors.grey}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  );
};
export default TextInputComponent;

const styles = StyleSheet.create({
  wrapperInput: {
    marginTop: scale(15),
  },
  textTitle: {
    fontSize: scale(14),
    marginBottom: scale(5),
  },
  container: {
    borderWidth: scale(1.5),
    borderRadius: scale(5),
  },
  input: {
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? scale(9) : scale(5),
    paddingHorizontal: scale(9),
  },
});
