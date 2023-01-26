/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {commonstyles} from '../styles/commonstyles';

class CategoryComponentTwo extends React.PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', {
              item: this.props.item,
              detailsData: this.props.propsdata,
            });
          }}>
          <View style={commonstyles.cardView}>
            <View style={commonstyles.cateviewImg}>
              <Image
                source={{uri: this.props.item?.web_featured_image}}
                style={commonstyles.cateImage}
              />
            </View>
            {/* https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2022/03/watermarklogo.jpg */}
            <View style={commonstyles.cateviewText}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.latestText}>
                {this.props.item?.title?.rendered}
              </Text>
              <View style={commonstyles.timeview}>
                <Text style={commonstyles.latesttime}>
                  {moment(this.props.item?.date_gmt).format('DD-MMM-YYYY')} ,{' '}
                </Text>
                <Text style={commonstyles.latesttime}>
                  {moment(this.props.item?.modified)
                    .utcOffset('+05:30')
                    .format('hh.mm a')}{' '}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default CategoryComponentTwo;
