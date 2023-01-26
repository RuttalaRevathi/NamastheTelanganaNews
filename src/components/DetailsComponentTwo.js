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

class DetailsComponentTwo extends React.PureComponent {
  render() {
    return (
      <View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderBottomColor:appThemeColor,
            // borderBottomWidth:1,marginLeft:5,marginRight:5,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Feather
                name="chevrons-down"
                size={25}
                color={appThemeColor}
                style={{marginTop: 3}}
              />

              <Text style={commonstyles.nextText}>Next Article</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                Share.share({
                  message: this.props.item.link,
                });
              }}>
              <MaterialIcons
                name="share"
                size={20}
                color={appThemeColor}
                style={{top: 3}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            source={{uri: this.props.item?.web_featured_image}}
            style={commonstyles.Detailslargecard}
          />
        </View>

        <View style={{margin: 10}}>
          <HTMLView
            value={'<p>' + this.props.item?.title?.rendered + '</p>'}
            stylesheet={HeaderStyle}
          />
        </View>

        <View style={{flexDirection: 'row', start: 10}}>
          <Text style={commonstyles.detailTime}>
            {moment(this.props.item?.date_gmt).format('MMMM DD , YYYY')} /{' '}
          </Text>
          <Text style={commonstyles.detailTime}>
            {moment(this.props.item?.modified)
              .utcOffset('+05:30')
              .format('hh.mm a')}{' '}
            IST{' '}
          </Text>
        </View>

        <View
          style={{
            width: screenWidth - 10,
            justifyContent: 'center',
            pointerEvents: 'none',
            paddingLeft: 10,
          }}>
          <AutoHeightWebView
            androidHardwareAccelerationDisabled // update here androidLayerType="software"
            customStyle={`
                    * {
                      font-family: 'Mandali-Bold';
                      line-height: 1.5;
                      -webkit-user-select: none;
                        -webkit-touch-callout: none; 
                       }
                    p {
                      font-size: 16px;
                      text-align:left;
                    padding: 0px 15px;
                      font-family:'Mandali-Regular';
                      line-height:35px
                                                    }
                                                    p img{
                                                      width:100%;
                                                      height:inherit
                                                    }
                                                    p iframe{
                                                      width:100%;
                                                      height:inherit
                                                    }
                                                    img{
                                                      width:100%;
                                                      height:inherit
                                                    }
                                                                                                                
                  `}
            source={{
              html: (this.props.item.content.rendered +=
                "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;color:#000;font-weight:500;font-size:18px}</style>"),
              baseUrl: 'https://twitter.com',
            }}
            scalesPageToFit={false}
            viewportContent={'width=device-width, user-scalable=no'}
          />
        </View>
      </View>
    );
  }
}
export default DetailsComponentTwo;
