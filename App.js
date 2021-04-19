/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoot } from './src/nav/AppNav';



const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <AppRoot></AppRoot>        
      </NavigationContainer>
    </>
  );
};



export default App;
