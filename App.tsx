import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from './src/navigators/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#EEEEEE"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};

export default App;
