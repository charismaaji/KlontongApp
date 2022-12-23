import React, {ReactElement} from 'react';
import {SafeAreaView, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../utils';

interface SafeAreaComponentProps {
  children: ReactElement;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaComponent = ({children, style}: SafeAreaComponentProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default SafeAreaComponent;
