import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors, responsiveHeight, responsiveWidth} from '../../utils';
import {ButtonComponent} from '../button';

interface NoDataComponentProps {
  onPress: () => void;
}

const NoDataComponent = ({onPress}: NoDataComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have any product!</Text>

      <ButtonComponent title="Click here for add product" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(414),
    height: responsiveHeight(896),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: scale(15),
    color: colors.black,
    fontWeight: '600',
    marginBottom: scale(20),
  },
});

export default NoDataComponent;
