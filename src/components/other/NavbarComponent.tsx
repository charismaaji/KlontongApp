import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {IconArrowLeft} from '../../assets';
import {GlobalStyle} from '../../utils';

export interface NavbarProps {
  onPress: () => void;
  title: string;
}

const NavbarComponent = ({onPress, title}: NavbarProps) => {
  return (
    <View style={[GlobalStyle.shadow2, styles.container]}>
      <Pressable style={{padding: scale(15)}} onPress={onPress}>
        <Image source={IconArrowLeft} style={styles.icon} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: scale(15),
    height: scale(15),
  },
  title: {
    fontSize: scale(15),
    fontWeight: '600',
    marginLeft: scale(10),
  },
});

export default NavbarComponent;
