/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';

class HomePhotogalleryItem extends React.PureComponent {
  render() {
    return (
      <View style={{marginRight: 5, marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PhotoArticle', {
              item: this.props.item,
              detailsData: this.props.photosData?.data,
            });
          }}>
          <View style={commonstyles.sliderView}>
            <FastImage
              source={{uri: this.props.item.web_featured_image}}
              style={commonstyles.photocard}
            />
            <LinearGradient
              colors={['transparent', 'white']}
              style={commonstyles.linearGradient}
              start={{x: 0.5, y: 0.2}}
              locations={[0.2, 0.8]}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.phototext}>
                {this.props.item.title.rendered}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomePhotogalleryItem;
