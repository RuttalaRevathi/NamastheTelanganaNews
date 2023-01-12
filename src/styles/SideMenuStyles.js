/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';
import {appThemeColor, whitecolor} from '../styles/commonstyles';

export const sideMenuStyle = StyleSheet.create({
  icon: {width: 15, height: 15},

  text: {
       color: appThemeColor,
    fontFamily: 'Mandali-Regular',
    fontSize: 20,
     },
  Disttext: {
    paddingLeft:45,
     color: appThemeColor,
     fontFamily: 'Mandali-Regular',
     fontSize: 20,
 },
  item: {
    borderTopColor: whitecolor,
    borderTopWidth: 1,
    marginVertical: -10,
    marginBottom: -5,
  },
  sectionsText: {
    color: whitecolor,
    paddingLeft: 10,
    fontFamily: 'Mandali-Bold',
    fontSize: 22,
  },
  cross:{top: 5, alignSelf: 'flex-end', justifyContent: 'center'}
});
