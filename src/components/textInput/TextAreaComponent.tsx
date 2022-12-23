import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils';
import {TextAreaProps} from './TextInput.config';

const TextAreaComponent = ({
  placeholder,
  value,
  onChangeText,
}: TextAreaProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        placeholder={''}
        numberOfLines={30}
        multiline
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(15),
  },
  textTitle: {
    fontSize: scale(14),
    marginBottom: scale(5),
  },
  input: {
    padding: scale(15),
    paddingTop: scale(10),
    backgroundColor: colors.grey,
    height: scale(150),
    textAlignVertical: 'top',
  },
});

export default TextAreaComponent;
