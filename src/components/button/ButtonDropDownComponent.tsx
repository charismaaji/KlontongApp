import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {scale} from 'react-native-size-matters';
import {IconArrowDown} from '../../assets';
import {colors} from '../../utils';
import {ButtonDropDownComponentProps} from './Button.config';

const ButtonDropDownComponent = ({
  data,
  onSelect,
  defaultText,
  buttonTextAfterSelection,
  rowTextForSelection,
  disabled,
  title,
}: ButtonDropDownComponentProps) => {
  const renderDropDownIcon = () => {
    return <Image source={IconArrowDown} style={styles.iconDown} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <SelectDropdown
        disabled={disabled}
        data={data}
        buttonStyle={styles.dropDownButton}
        buttonTextStyle={styles.textDropDown}
        renderDropdownIcon={renderDropDownIcon}
        dropdownIconPosition="right"
        dropdownStyle={{borderRadius: scale(5)}}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        defaultButtonText={defaultText}
        onSelect={onSelect}
        buttonTextAfterSelection={buttonTextAfterSelection}
        rowTextForSelection={rowTextForSelection}
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
  iconDown: {
    width: scale(16),
    height: scale(12),
    marginRight: scale(10),
  },
  dropDownButton: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: scale(1.5),
    borderColor: colors.grey,
    borderRadius: scale(5),
    height: scale(35),
  },
  textDropDown: {
    textAlign: 'left',
    color: colors.darkGrey,
    fontSize: scale(13),
    marginLeft: scale(2),
  },
  dropdown1RowTxtStyle: {color: colors.darkGrey, textAlign: 'left'},
});

export default ButtonDropDownComponent;
