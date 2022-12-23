import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils';

const LineSeparatorComponent = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(1),
    backgroundColor: colors.grey,
  },
});

export default LineSeparatorComponent;
