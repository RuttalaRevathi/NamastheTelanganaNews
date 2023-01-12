/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import Home from '../screens/Home';
import Details from '../screens/Details';
import { appThemeColor, blackcolor, Dark_Gray, light_blue, red } from '../styles/commonstyles';
import HyderabadScreen from '../screens/TopTabScreens/Hyderabad';
import CinemaScreen from '../screens/TopTabScreens/Cinema';
import RasiPhalaluScreen from '../screens/TopTabScreens/RasiPhalalu';
import CartoonScreen from '../screens/TopTabScreens/Cartoon';
import HealthScreen from '../screens/TopTabScreens/Health';
import TelanganaScreen from '../screens/TopTabScreens/Telangana';
import ApScreen from '../screens/TopTabScreens/Ap';
import NationalScreen from '../screens/TopTabScreens/National';
import InterNationalScreen from '../screens/TopTabScreens/InterNational';
import SportsScreen from '../screens/TopTabScreens/Sports';
import BusinessScreen from '../screens/TopTabScreens/Business';
import NriScreen from '../screens/TopTabScreens/Nri';
import PhotoGallery from '../screens/TopTabScreens/PhotoGallery';
import EditPageScreen from '../screens/TopTabScreens/EditPage';
import ZindagiScreen from '../screens/TopTabScreens/Zindagi';
import BathukammaScreen from '../screens/TopTabScreens/Bathukamma';
import AgricultureScreen from '../screens/TopTabScreens/Agriculture';
import CookingScreen from '../screens/TopTabScreens/Cooking';
import VaasthuScreen from '../screens/TopTabScreens/Vaasthu';
import LatestNews from '../screens/LatestNews';
import Videos from '../screens/TopTabScreens/Videos';
import Adilabad from '../screens/DistrictScreens/Adilabad';
import Karimnagar from '../screens/DistrictScreens/Karimnagar';
import Khammam from '../screens/DistrictScreens/Khammam';
import Mahabubnagar from '../screens/DistrictScreens/Mahabubnagar';
import Medak from '../screens/DistrictScreens/Medak';
import Nalgonda from '../screens/DistrictScreens/Nalgonda';
import Nizamabad from '../screens/DistrictScreens/Nizamabad';
import Rangareddy from '../screens/DistrictScreens/Rangareddy';
import Warangal from '../screens/DistrictScreens/Warangal';

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={({ focused }) => ({
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: appThemeColor,
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 20, fontFamily: 'Mandali-Bold' },
        tabBarStyle: {
          backgroundColor: light_blue,
          height: 50,
        },
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
        },
        tabBarOptions: {
          showLabel: true,
        },
      })}>
      {/* <TopTab.Screen name="Home" component={Home} /> */}
      <TopTab.Screen
      name="."
      component={Home}
      options={{
        headerShown: false,
        // tabBarLabel: 'Home',
        tabBarIcon: ({color, focused}) => (
          <Image
            style={{
              height: 20,
              width: 20,
              tintColor: focused ? appThemeColor :blackcolor,
              top: 5,
            }}
            source={require('../Assets/Images/home.png')}
          />
        ),
      }}
    />
      <TopTab.Screen name="లేటెస్ట్ న్యూస్" component={LatestNews} />
      <TopTab.Screen name="సినిమా" component={CinemaScreen} />
      <TopTab.Screen name="రాశి ఫలాలు‌" component={RasiPhalaluScreen} />
      <TopTab.Screen name="కార్టూన్‌" component={CartoonScreen} />
      <TopTab.Screen name="ఆరోగ్యం" component={HealthScreen} />
      <TopTab.Screen name="హైదరాబాద్‌" component={HyderabadScreen} />
      <TopTab.Screen name="తెలంగాణ" component={TelanganaScreen} />
      <TopTab.Screen name="ఏపీ" component={ApScreen} />
      <TopTab.Screen name="జాతీయం" component={NationalScreen} />
      <TopTab.Screen name="అంతర్జాతీయం" component={InterNationalScreen} />
      <TopTab.Screen name="స్పోర్ట్స్" component={SportsScreen} />
      <TopTab.Screen name="బిజినెస్" component={BusinessScreen} />
      <TopTab.Screen name="ఎన్‌ఆర్‌ఐ" component={NriScreen} />
      <TopTab.Screen name="ఫొటోలు" component={PhotoGallery} />
      <TopTab.Screen name="వీడియోలు" component={Videos} />
      <TopTab.Screen name="ఎడిట్‌ పేజీ" component={EditPageScreen} />
      <TopTab.Screen name="జిందగీ" component={ZindagiScreen} />
      <TopTab.Screen name="బతుకమ్మ" component={BathukammaScreen} />
      <TopTab.Screen name="వ్యవసాయం" component={AgricultureScreen} />
      <TopTab.Screen name="వంటలు" component={CookingScreen} />
      <TopTab.Screen name="వాస్తు" component={VaasthuScreen} />
      {/* <TopTab.Screen name="ఆదిలాబాద్" component={Adilabad} /> */}
      {/* <TopTab.Screen name="కరీంనగర్‌" component={Karimnagar} />
      <TopTab.Screen name="ఖమ్మం" component={Khammam} />
      <TopTab.Screen name="మెహబూబ్ నగర్" component={Mahabubnagar} />
      <TopTab.Screen name="మెదక్" component={Medak} />
      <TopTab.Screen name="నల్గొండ" component={Nalgonda} />
      <TopTab.Screen name="నిజామాబాద్" component={Nizamabad} />
      <TopTab.Screen name="రంగారెడ్డి" component={Rangareddy} /> */}
      {/* <TopTab.Screen name="వరంగల్" component={Warangal} /> */}

    
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
