export interface ButtonComponentProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

export interface ButtonDropDownComponentProps {
  data: {}[];
  onSelect: (e: any) => void;
  defaultText: string;
  buttonTextAfterSelection: (selectedItem: any, index: number) => string;
  rowTextForSelection: (item: any, index: number) => string;
  disabled?: boolean;
  title: string;
}

export interface ButtonRoundComponentProps {
  onPress: () => void;
}
