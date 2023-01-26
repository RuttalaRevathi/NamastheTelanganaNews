/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {commonstyles} from '../styles/commonstyles';

class HomeComponentOne extends React.PureComponent {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Details', {
                item: this.props.item,
                detailsData: this.props?.propsdata,
              });
            }}>
            <View style={commonstyles.latestMainView}>
              <View style={commonstyles.latestsubView}>
                <View>
                  <FastImage
                    style={commonstyles.latestimgTag}
                    source={{
                      uri: this.props.item?.web_featured_image,
                      cache: FastImage.cacheControl.immutable,
                    }}
                  />
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={commonstyles.latestTxtTag}>
                    {this.props.item?.title?.rendered}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeComponentOne;
