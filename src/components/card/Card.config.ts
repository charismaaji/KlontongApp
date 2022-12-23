import {ImageSourcePropType} from 'react-native';

export interface CardProductProps {
  onPress: () => void;
  source: ImageSourcePropType;
  title: string;
  price: number;
}
