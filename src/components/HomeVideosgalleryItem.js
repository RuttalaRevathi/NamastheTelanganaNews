/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';

class HomeVideosgalleryItem extends React.PureComponent {
  render() {
    return (
      <View style={{marginRight: 5, marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('VideoArticle', {
              item: this.props.item,
              detailsData: this.props.videosData?.data,
            });
          }}>
          <View style={commonstyles.sliderView}>
            <ImageBackground
              imageStyle={{borderRadius: 6}}
              source={{uri: this.props.item.web_featured_image}}
              style={commonstyles.videocard}>
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                  marginVertical: 100,
                }}>
                <FastImage
                  style={{width: 30, height: 20}}
                  source={require('../Assets/Images/videoicon.png')}
                />
              </View>
            </ImageBackground>
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
export default HomeVideosgalleryItem;
