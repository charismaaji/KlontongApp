import React, {useEffect, useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  ButtonComponent,
  ButtonDropDownComponent,
  GapComponent,
  LoadingComponent,
  NavbarComponent,
  SafeAreaComponent,
  TextAreaComponent,
  TextInputComponent,
} from '../../components';
import {
  DataCategoryProps,
  ProductDataProps,
  ProductDetailProps,
} from '../../config';
import {colors, responsiveWidth} from '../../utils';
import {CategoryData} from './Constant';
import useProduct from './../../redux/hooks/ProductHook';

const AddEditProductScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {
    isEditMode,
    addProductList,
    currentProduct,
    loading,
    getProductList,
    updateProduct,
    changeCurrentProduct,
  } = useProduct();

  const [disabled, setDisabled] = useState(false);
  const [productData, setProductData] = useState<ProductDataProps>({
    image: '',
    productName: '',
    categoryId: 0,
    categoryName: '',
    description: '',
    price: 0,
  });
  const {productName, description, image, categoryId, price, categoryName} =
    productData;

  const handleChangeState = (field: string, value: number | string) => {
    setProductData(
      prev =>
        (prev = {
          ...prev,
          [field]: value,
        }),
    );
  };

  const handleDisabledButton = () => {
    if (
      price === 0 ||
      image === '' ||
      productName === '' ||
      categoryId === 0 ||
      description === ''
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleOpenPhotoLibrary = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
      maxWidth: 400,
      maxHeight: 400,
    };
    // @ts-ignore
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User Cancelled image');
      } else if (res.errorCode) {
        console.log('this is error', res);
      } else {
        // @ts-ignore
        const result = res?.assets[0]?.uri;
        // @ts-ignore
        // const uri = `data:image/png;base64,${res.assets[0].base64}`;
        const uri = result;
        // @ts-ignore
        handleChangeState('image', result);
      }
    });
  };

  const handleUpdateProduct = async () => {
    const priceString = price.toString();
    const newPrice = parseInt(priceString);
    const newDataProduct = {
      ...productData,
      price: newPrice,
    };

    // @ts-ignore
    const result: {
      success: boolean;
      error: boolean;
      data: ProductDetailProps;
    } = await updateProduct(newDataProduct, currentProduct.id);
    if (result.error) {
      Alert.alert('Error', 'Failed to update product');
      return;
    }

    const getProduct = await getProductList(1, 15, '');
    changeCurrentProduct(result.data);
    navigation.replace('ProductStack', {
      screen: 'ProductDetailScreen',
    });
  };

  const handleCreateProduct = async () => {
    const priceString = price.toString();
    const newPrice = parseInt(priceString);
    const newDataProduct = {
      ...productData,
      price: newPrice,
    };
    // @ts-ignore
    const result: {
      success: boolean;
      error: boolean;
    } = await addProductList(newDataProduct);
    if (result.success) {
      const result = await getProductList(1, 15, '');
      navigation.replace('HomeStack', {
        screen: 'HomeScreen',
      });
      return;
    }

    Alert.alert('Error', 'Failed to create product');
  };

  const handlePressButton = () => {
    if (isEditMode) {
      handleUpdateProduct();
      return;
    } else {
      handleCreateProduct();
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    handleDisabledButton();
  }, [productName, description, image, categoryId, price, categoryName]);

  useEffect(() => {
    if (isEditMode) {
      setProductData(currentProduct);
    }
  }, []);

  return (
    <SafeAreaComponent>
      <React.Fragment>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <NavbarComponent
            onPress={handleGoBack}
            title={isEditMode ? 'Edit Product' : 'Add Product'}
          />

          <View style={styles.container}>
            {image === '' ? (
              <Pressable
                style={styles.noImageWrapper}
                onPress={handleOpenPhotoLibrary}>
                <Text>Click here to add image</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.image} onPress={handleOpenPhotoLibrary}>
                <Image style={styles.image} source={{uri: image}} />
              </Pressable>
            )}

            <TextInputComponent
              placeholder="Product Name"
              onChangeText={text => handleChangeState('productName', text)}
              value={productName}
              placeholderInput={'Pringles, Coca Cola, ect...'}
            />

            <ButtonDropDownComponent
              title="Category"
              data={CategoryData}
              defaultText={
                categoryName === '' ? 'Select Category' : categoryName
              }
              onSelect={(selectedItem: DataCategoryProps) => {
                handleChangeState('categoryId', selectedItem.id);
                handleChangeState('categoryName', selectedItem.categoryName);
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.categoryName;
              }}
              rowTextForSelection={item => {
                return item.categoryName;
              }}
            />

            <TextInputComponent
              placeholder="Price"
              onChangeText={text => handleChangeState('price', text)}
              value={price.toString()}
              keyboardType="number-pad"
              placeholderInput="10000"
            />

            <TextAreaComponent
              placeholder="Description"
              value={description}
              onChangeText={text => handleChangeState('description', text)}
            />

            <GapComponent height={scale(30)} />

            <ButtonComponent
              title={isEditMode ? 'Update product' : 'Create product'}
              onPress={handlePressButton}
              disabled={disabled}
            />

            <GapComponent height={scale(30)} />
          </View>
        </KeyboardAwareScrollView>

        {loading && <LoadingComponent />}
      </React.Fragment>
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(15),
    marginTop: scale(10),
  },
  noImageWrapper: {
    width: responsiveWidth(384),
    height: responsiveWidth(300),
    borderWidth: 2,
    borderColor: colors.grey,
    borderRadius: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: responsiveWidth(384),
    height: responsiveWidth(300),
    borderRadius: scale(5),
  },
});

export default AddEditProductScreen;
