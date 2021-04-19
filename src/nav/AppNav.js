import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../componets/Login';
import ListProduct from '../componets/ListProduct';

const AppRootNav = createStackNavigator();
export const AppRoot = () => (
  <AppRootNav.Navigator>
    <AppRootNav.Screen
      name="LoginPage"
      options={{header: () => null}}
      component={Login}
    />
    <AppRootNav.Screen
      options={{
        title: 'Test Products',
        headerStyle: {
          backgroundColor: '#0087E0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => null,
      }}
      name="ListProductPage"
      component={ListProduct}
    />
  </AppRootNav.Navigator>
);
