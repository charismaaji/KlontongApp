import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routes';
import {Provider} from 'react-redux';
import store from './src/redux/state';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
