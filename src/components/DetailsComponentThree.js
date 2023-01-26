/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {appThemeColor, commonstyles} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import HTMLView from 'react-native-htmlview';
import {HeaderStyle} from '../styles/Header.Styles';
const screenWidth = Dimensions.get('window').width;

class DetailsComponentThree extends React.PureComponent {
  render() {
    return (
      <View style={{marginRight: 5, marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', {
              item: this.props.item,
            });
          }}>
          <View style={commonstyles.sliderView}>
            <Image
              source={{uri: this.props.item.web_featured_image}}
              style={commonstyles.photocard}
            />
            <LinearGradient
              colors={['transparent', 'black']}
              style={commonstyles.linearGradient}
              start={{x: 0.5, y: 0.2}}
              locations={[0.2, 0.8]}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.flashtext}>
                {this.props.item.title.rendered}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DetailsComponentThree;
