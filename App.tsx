import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar animated backgroundColor="#EEEEEE" barStyle={'dark-content'} />
      <HomeScreen />
    </>
  );
};

export default App;
