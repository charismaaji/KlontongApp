import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors, GlobalStyle, numberWithCommas} from '../../utils';
import {CardProductProps} from './Card.config';

const CardProductComponent: React.FunctionComponent<CardProductProps> = ({
  onPress,
  price,
  source,
  title,
}) => {
  return (
    <Pressable
      style={[GlobalStyle.shadow2, styles.wrapperCard]}
      onPress={onPress}>
      <View style={[styles.container]}>
        <Image source={source} style={styles.image} />
        <Text style={styles.textProduct} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.textPrice} numberOfLines={2}>
          Rp. {numberWithCommas(price)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCard: {
    marginTop: scale(15),
    borderRadius: scale(5),
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: scale(10),
    overflow: 'hidden',
    paddingBottom: scale(10),
  },
  image: {
    width: scale(150),
    height: scale(150),
  },
  textProduct: {
    padding: scale(5),
    width: scale(150),
    fontSize: 14,
    color: colors.black,
  },
  textPrice: {
    paddingHorizontal: scale(5),
    marginTop: scale(2),
    width: scale(150),
    fontSize: 14,
    color: colors.green,
    fontWeight: '800',
  },
});

export default CardProductComponent;
