/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
// import Details from '../../screens/NewsArticle';

import PhotoArticle from '../../screens/PhotoArticle';

import TopTabNavigator from '../TopTabNavigator';
import VideoArticle from '../../screens/VideoArticle';
import CartoonArticle from '../../screens/CartoonArticle';
import Adilabad from '../../screens/DistrictScreens/Adilabad';
import Karimnagar from '../../screens/DistrictScreens/Karimnagar';
import Khammam from '../../screens/DistrictScreens/Khammam';
import Mahabubnagar from '../../screens/DistrictScreens/Mahabubnagar';
import Medak from '../../screens/DistrictScreens/Medak';
import Nalgonda from '../../screens/DistrictScreens/Nalgonda';
import Nizamabad from '../../screens/DistrictScreens/Nizamabad';
import Rangareddy from '../../screens/DistrictScreens/Rangareddy';
import Warangal from '../../screens/DistrictScreens/Warangal';
import HyderabadScreen from '../../screens/TopTabScreens/Hyderabad';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={TopTabNavigator} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="PhotoArticle" component={PhotoArticle} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="CartoonArticle" component={CartoonArticle} />
      <Stack.Screen name="హైదరాబాద్‌" component={HyderabadScreen} />
      <Stack.Screen name="ఆదిలాబాద్" component={Adilabad} />
      <Stack.Screen name="కరీంనగర్‌" component={Karimnagar} />
      <Stack.Screen name="ఖమ్మం" component={Khammam} />
      <Stack.Screen name="మహబూబ్ నగర్" component={Mahabubnagar} />
      <Stack.Screen name="మెదక్" component={Medak} />
      <Stack.Screen name="నల్గొండ" component={Nalgonda} />
      <Stack.Screen name="నిజామాబాద్" component={Nizamabad} />
      <Stack.Screen name="రంగారెడ్డి" component={Rangareddy} />
      <Stack.Screen name="వరంగల్" component={Warangal} />

    </Stack.Navigator>
  )
};

export default HomeStackNavigator;
