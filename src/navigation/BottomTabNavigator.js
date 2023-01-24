/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from '../navigation/stack-navigators/HomeStackNavigator';
import Details from '../screens/Details';
import Home from '../screens/Home';
import { Image, Linking, TouchableOpacity } from 'react-native';
import { appThemeColor, Dark_Gray } from '../styles/commonstyles';
import PhotoGallery from '../screens/TopTabScreens/PhotoGallery';
import LatestNews from '../screens/LatestNews';
import FastImage from 'react-native-fast-image';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ focused }) => ({
        tabBarActiveTintColor: appThemeColor,
        tabBarInactiveTintColor: Dark_Gray,
        style: { backgroundColor: 'rgba(52, 52, 52, 0.8)' },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          fontFamily: 'RobotoCondensed-Regular',
        },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: {
          backgroundColor: '#d8f3fc',
          height: 45,
        },
        tabBarOptions: {
          activeBackgroundColor: appThemeColor,
          inactiveBackgroundColor: appThemeColor,
          showLabel: true,
        },
      })}>
      <Tab.Screen
        name="TopTabs"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? appThemeColor : Dark_Gray,
                top: 5,
              }}
              source={require('../Assets/Images/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LatestNews"
        component={LatestNews}
        options={{
          headerShown: false,
          tabBarLabel: 'Latest News',
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? appThemeColor : Dark_Gray,
                top: 5,
              }}
              source={require('../Assets/Images/topnews.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Photos"
        component={PhotoGallery}
        options={{
          headerShown: false,
          tabBarLabel: 'Photo Gallery',

          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? appThemeColor : Dark_Gray,
                top: 5,
              }}
              source={require('../Assets/Images/gallery.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Epaper"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'e-Paper',
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                Linking.openURL('https://epaper.ntnews.com/');
              }}
            />
          ),

          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? appThemeColor : Dark_Gray,
                top: 5,
              }}
              source={require('../Assets/Images/paper.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
