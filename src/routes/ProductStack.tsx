import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddEditProductScreen, ProductDetailScreen} from '../screen';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProductDetailScreen">
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name="AddEditProductScreen"
        component={AddEditProductScreen}
      />
    </Stack.Navigator>
  );
};
export default ProductStack;
