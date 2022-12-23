import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  ButtonComponent,
  GapComponent,
  LineSeparatorComponent,
  NavbarComponent,
  SafeAreaComponent,
} from '../../components';
import {colors, numberWithCommas, responsiveWidth} from '../../utils';
import useProduct from './../../redux/hooks/ProductHook';

const ProductDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {changeIsEditMode, currentProduct} = useProduct();

  const {image, price, description, productName} = currentProduct;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEditProduct = () => {
    changeIsEditMode(true);
    navigation.navigate('ProductStack', {
      screen: 'AddEditProductScreen',
    });
  };

  return (
    <SafeAreaComponent>
      <React.Fragment>
        <ScrollView>
          <NavbarComponent onPress={handleGoBack} title="Product Details" />
          <Image source={{uri: image}} style={styles.productImage} />

          <View style={styles.container}>
            <Text style={styles.textPrice}>Rp. {numberWithCommas(price)}</Text>
            <Text style={styles.textTitle}>{productName}</Text>
            <LineSeparatorComponent />

            <GapComponent height={scale(10)} />

            <Text style={styles.textDescriptionTitle}>Description product</Text>
            <Text style={styles.textDescription}>{description}</Text>
          </View>
        </ScrollView>
        <View style={styles.wrapperButton}>
          <ButtonComponent title="Edit Product" onPress={handleEditProduct} />
        </View>
      </React.Fragment>
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: responsiveWidth(414),
    height: responsiveWidth(414),
  },
  container: {
    paddingHorizontal: scale(15),
  },
  textPrice: {
    fontSize: scale(18),
    paddingVertical: scale(5),
    fontWeight: '700',
    color: colors.black,
  },
  textTitle: {
    fontSize: scale(16),
    marginTop: scale(5),
    color: colors.black,
    marginBottom: scale(10),
  },
  textDescriptionTitle: {
    fontSize: scale(16),
    paddingVertical: scale(5),
    fontWeight: '700',
    color: colors.black,
    marginBottom: scale(10),
  },
  textDescription: {
    fontSize: scale(14),
    color: colors.black,
    marginBottom: scale(10),
  },
  wrapperButton: {
    padding: scale(15),
  },
});

export default ProductDetailScreen;
