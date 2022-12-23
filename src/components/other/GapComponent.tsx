import React from 'react';
import {View} from 'react-native';

interface GapComponentProps {
  width?: number;
  height?: number;
}

const GapComponent = ({width, height}: GapComponentProps) => {
  return <View style={{width: width, height: height}} />;
};
export default GapComponent;
