/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';

class HomeCarouselItem extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Details', {
            item: this.props.item,
            detailsData: this.props.propsdata,
          });
        }}>
        <View style={commonstyles.sliderView}>
          <FastImage
            source={{uri: this.props.item.web_featured_image}}
            style={commonstyles.slidercard}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontFamily: 'Mandali-Bold',
              }}>
              {this.props.index + 1}/{this.props.propsdata.length}
            </Text>
          </View>
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
            style={commonstyles.sliderGradient}>
            <Text style={commonstyles.slidertext}>
              {this.props.item.title.rendered}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  }
}
export default HomeCarouselItem;
