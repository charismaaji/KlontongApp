import React, {useEffect} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeStack', {
        screen: 'HomeScreen',
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Klontong App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: scale(30),
    fontWeight: '800',
    color: colors.white,
  },
});

export default SplashScreen;
