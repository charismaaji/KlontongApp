import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductStack from './ProductStack';
import {SplashScreen} from '../screen';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

export interface RootStackParams {
  Home: {
    name: string;
  };
}

const Routers = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

      <Stack.Screen name="ProductStack" component={ProductStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default Routers;
