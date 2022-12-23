import React, {useEffect, useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  ButtonRoundComponent,
  CardProductComponent,
  GapComponent,
  LoadingComponent,
  NoDataComponent,
  SafeAreaComponent,
  TextInputButtonComponent,
} from '../../components';
import useProduct from './../../redux/hooks/ProductHook';
import {ProductDetailProps} from '../../config';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {changeCurrentProduct, changeIsEditMode, getProductList, loading} =
    useProduct();

  const [searchValue, setSearchValue] = useState('');
  const [clickSearch, setClickSearch] = useState(false);
  const [listProduct, setListProduct] = useState<ProductDetailProps[]>([]);
  const [page, setPage] = useState(1);

  const handleGetListProduct = async () => {
    // @ts-ignore
    const result: {
      error: boolean;
      data: ProductDetailProps[];
    } = await getProductList(10, page, searchValue);

    if (result.error) {
      Alert.alert('Error', 'Something went wrong');
      return;
    }

    if (page === 1) {
      setListProduct(result.data);
      return;
    }
    setListProduct(prev => (prev = prev.concat(result.data)));
  };

  const handleOnEndReached = () => {
    if (listProduct.length <= 10) {
      setPage(1);
      return;
    }

    setPage(page + 1);
  };

  const handleSearchProduct = () => {
    setClickSearch(prev => (prev = !prev));
    setPage(1);
  };

  const handleProductDetailNavigation = (item: ProductDetailProps) => {
    changeCurrentProduct(item);
    navigation.navigate('ProductStack', {
      screen: 'ProductDetailScreen',
    });
  };

  const handleAddProduct = () => {
    changeIsEditMode(false);
    navigation.navigate('ProductStack', {
      screen: 'AddEditProductScreen',
    });
  };

  useEffect(() => {
    handleGetListProduct();
  }, [page, clickSearch]);

  return (
    <SafeAreaComponent>
      <React.Fragment>
        {listProduct.length === 0 ? (
          <NoDataComponent onPress={handleAddProduct} />
        ) : (
          <React.Fragment>
            <View style={styles.wrapperSearch}>
              <TextInputButtonComponent
                value={searchValue}
                onChangeText={text => setSearchValue(text)}
                placeholder="Search product"
                onPressButton={handleSearchProduct}
                onSubmitEditing={handleSearchProduct}
              />
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              data={listProduct}
              contentContainerStyle={styles.flatList}
              numColumns={2}
              horizontal={false}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={({item}) => {
                return (
                  <CardProductComponent
                    key={item.id}
                    price={item.price}
                    title={item.productName}
                    source={{uri: item.image}}
                    onPress={() => handleProductDetailNavigation(item)}
                  />
                );
              }}
              onEndReached={handleOnEndReached}
              ListFooterComponent={<GapComponent height={scale(30)} />}
            />

            <View style={styles.wrapperCircleButton}>
              <ButtonRoundComponent onPress={handleAddProduct} />
            </View>
          </React.Fragment>
        )}
        {loading && <LoadingComponent />}
      </React.Fragment>
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({
  flatList: {
    alignContent: 'space-between',
    paddingHorizontal: scale(15),
  },
  wrapperCircleButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: scale(40),
    marginBottom: scale(50),
  },
  wrapperSearch: {
    paddingHorizontal: scale(15),
    marginBottom: scale(10),
  },
});

export default HomeScreen;
