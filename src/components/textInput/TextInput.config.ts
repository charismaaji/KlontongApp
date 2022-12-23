import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

export interface TextInputComponentProps {
  placeholder: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: number;
  height?: number;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  placeholderInput?: string;
  onPressButton?: () => void;
}

export interface TextAreaProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}
