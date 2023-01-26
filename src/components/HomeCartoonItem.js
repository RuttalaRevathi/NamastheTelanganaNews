/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';

class HomeCartoonItem extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={commonstyles.CartoonCard}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CartoonArticle', {
                item: this.props.item,
                detailsData: this.props.cartoonData?.data,
              });
            }}>
            <FastImage
              source={{uri: this.props.item.web_featured_image}}
              style={commonstyles.cartoonimg}
            />
            <View>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.SportText}>
                {this.props.item.title.rendered}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeCartoonItem;
