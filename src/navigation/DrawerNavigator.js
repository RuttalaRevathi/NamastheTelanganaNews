/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStackNavigator from '../navigation/stack-navigators/HomeStackNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { HeaderStyle } from '../styles/Header.Styles';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ContactUs from '../screens/contactScreens/ContactUs';
import AboutUs from '../screens/contactScreens/AboutUs';
import PrivacyPolicy from '../screens/contactScreens/PrivacyPolicy';
import Terms from '../screens/contactScreens/Terms';
import Modal from "react-native-modal";
import SideMenu from '../components/SideMenu';
// import WarangalScreen from '../screens/DistrictScreens/Warangal';


const Drawer = createDrawerNavigator();

const DrawerNavigator = (navigation) => {
  return (
    <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      {/* <Drawer.Screen
        name="Details"
        component={NewsArticle}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="PhotoGalleryArticle"
        component={PhotoArticle}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="VideoArticle"
        component={VideoArticle}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="CartoonArticle"
        component={CartoonArticle}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      /> */}
      {/* <Drawer.Screen
        name="Varthalu"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      /> */}
      {/* <Drawer.Screen
        name="Hyderabad"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      /> */}
      {/* <Drawer.Screen
        name="National"
        component={NationalNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="InterNational"
        component={InternationalNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Telangana"
        component={TelanganaNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Ap"
        component={ApNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Cinema"
        component={CinemaNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Sports"
        component={SportsNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Chinthana"
        component={ChinthanaNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Education"
        component={EducationNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Business"
        component={BusinessNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Special"
        component={SpecialNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Nri"
        component={NriNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="LifeStyle"
        component={LifestyleNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Photos"
        component={PhotosNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Videos"
        component={VideosNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="More"
        component={MoreNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Science"
        component={ScienceNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Cartoon"
        component={CartoonNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="EverGreen"
        component={EvergreenNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Crime"
        component={CrimeNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Zindagi"
        component={ZindagiNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Bathukamma"
        component={BathukammaNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Tourism"
        component={TourismNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Agriculture"
        component={AgricultureNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="EditPage"
        component={EditpageNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Sampadha"
        component={SampadhaNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Cooking"
        component={CookingNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Kathalu"
        component={KathaluNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Health"
        component={HealthNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Vaasthu"
        component={VaasthuNews}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />*/}
      {/* <Drawer.Screen
        name="వరంగల్"
        component={WarangalScreen}
        options={({navigation}) => ({
          headerStyle: {backgroundColor: appThemeColor},
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      /> */}
      <Drawer.Screen
        name="Contact"
        component={ContactUs}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="About"
        component={AboutUs}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Privacy"
        component={PrivacyPolicy}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="Terms"
        component={Terms}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: appThemeColor },
          headerRight: () => (
            <View style={HeaderStyle.HeadRightView}>
              <TouchableOpacity
                >
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
    // <Drawer.Navigator
    //   screenOptions={{
    //     headerTitleAlign: 'center',
    //     headerLayoutPreset: 'center',
    //     headerStyle: {backgroundColor: appThemeColor},
    //     // headerLeft: () => (
    //     //     <View style={HeaderStyle.headerLeftView}>
    //     //       <TouchableOpacity
    //     //         onPress={() => {
    //     //           navigation.toggleDrawer();
    //     //         }}>
    //     //         <Image
    //     //           style={HeaderStyle.headerLeftImg}
    //     //           source={require('../Assets/Images/menu.png')}
    //     //         />
    //     //       </TouchableOpacity>
    //     //     </View>
    //     //   ),
    //      headerTitle: () => (
    //         <View style={HeaderStyle.HeadTitleView}>
    //           <Image
    //             style={HeaderStyle.HeadTitleImg}
    //             source={require('../Assets/Images/logo.png')}
    //           />
    //         </View>
    //       ),
    //       headerRight: () => (
    //         <View style={HeaderStyle.HeadRightView}>
    //           <TouchableOpacity
    //             onPress={() => {
    //               navigation.navigate('LatestNews');
    //             }}>
    //             <Image
    //               style={HeaderStyle.HeadRightImg}
    //               source={require('../Assets/Images/bell.png')}
    //             />
    //           </TouchableOpacity>
    //         </View>
    //       ),

    //   }}>
    //   <Drawer.Screen name="Home" component={BottomTabNavigator} />
    //   <Drawer.Screen name="news" component={HomeStackNavigator} />
    //   <Drawer.Screen name="photos" component={HomeStackNavigator} />
    // </Drawer.Navigator>
  );
};

export default DrawerNavigator;
const CustomSideMenu = props => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ flex: 1, paddingTop: 20, backgroundColor: graycolor }}>
      <View style={{ backgroundColor: appThemeColor, flexDirection: 'row' }}>
        <View style={{ width: '90%' }}>
          <Text style={sideMenuStyle.sectionsText}>Sections</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.closeDrawer();
            }}>
            <Entypo
              name="cross"
              size={23}
              color={whitecolor}
              style={sideMenuStyle.cross}
            />
          </TouchableOpacity>
        </View>
      </View>
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/home.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="హోమ్"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Hyderabad');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/topnews.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="లేటెస్ట్ న్యూస్"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Hyderabad');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/horoscope.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="రాశి ఫలాలు"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('రాశి ఫలాలు');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/cartoon.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="కార్టూన్‌"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('National');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/health.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="ఆరోగ్యం"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('InterNational');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/hyderabad.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="హైదరాబాద్‌"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Telangana');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/telangana.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="తెలంగాణ"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Ap');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/ap.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="ఏపీ"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Cinema');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/national.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="జాతీయం"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Sports');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/international.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="అంతర్జాతీయం"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Chinthana');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/sports.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="స్పోర్ట్స్"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Education');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/business.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="బిజినెస్"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Business');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/nri.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="ఎన్‌ఆర్‌ఐ"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Special');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/photos.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="ఫొటోలు"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Nri');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/video.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="వీడియోలు"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('వీడియోలు');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/editpage.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="ఎడిట్‌ పేజీ"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Photos');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/zindagi.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="జిందగీ"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Videos');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/bathukamma.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="బతుకమ్మ"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Science');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/agriculture.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="వ్యవసాయం"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Cartoon');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/cooking.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="వంటలు"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('EverGreen');
        }}
      />

      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/vaasthu.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="వాస్తు"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Crime');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/more.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label={({ color }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={sideMenuStyle.text}>జిల్లాలు</Text>
            </View>
            <TouchableOpacity onPress={() => {
              this.NestedDrawerItem()
            }}>
              <AntDesign name="caretdown" size={15} color={blackcolor} style={{ top: 15 }} />
            </TouchableOpacity>
          </View>
        )}
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('More');
        }}
      />
      {/* <Modal>
        <View>
          {this.state.VarthaluItem == true && (
            <DrawerItem style={sideMenuStyle.item}

              icon={({ color, size }) =>
                <Image source={require('../Assets/Images/sidemenuIcons/hyderabad.png')} style={sideMenuStyle.icon} />
              }
              label="హైదరాబాద్"
              labelStyle={sideMenuStyle.text}
              onPress={() => {
                this.props.navigation.navigate("Hyderabad")
              }}
            />
          )}
        </View>
      </Modal> */}
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/contact.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="Contact Us"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Contact');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/about.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="About Us"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('About');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/privacy.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="Privacy Policy"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Privacy');
        }}
      />
      <DrawerItem
        style={sideMenuStyle.item}
        icon={({ color, size }) => (
          <Image
            source={require('../Assets/Images/sidemenuIcons/conditions.png')}
            style={sideMenuStyle.icon}
          />
        )}
        label="Terms and Conditions"
        labelStyle={sideMenuStyle.text}
        onPress={() => {
          props.navigation.navigate('Terms');
        }}
      />
    </DrawerContentScrollView>
  );
};
