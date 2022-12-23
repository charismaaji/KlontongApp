import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils';

const LoadingComponent = () => {
  return (
    <View style={styles.wrapperActivityIndicator}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperActivityIndicator: {
    width: responsiveWidth(414),
    height: responsiveHeight(896),
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingComponent;
