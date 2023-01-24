/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, commonstyles, Header_text } from '../styles/commonstyles';
import WebView from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import getArticleDetailAction from '../redux/actions/getArticleDetailAction';
// import Image from 'react-native-fast-image';
const screenWidth = Dimensions.get('window').width;

// let decode = require('html-entities-decoder');

const Details = ({ navigation, relatedData, relatedLoading,
  articleDetailData,
  articleDetailLoading,
  sliderData,
  loading,
  latestNews,
  latestLoading, route }: Props) => {
  const dispatch = useDispatch();
  const [detailsData, setDetailsData] = useState([]);
  // const [autiHeightData,setAutiHeightData] =useState();

  useEffect(() => {
    dispatch(getRelatedAction(route?.params?.item?.id));
    setDetailsData(route?.params?.detailsData);
    dispatch(getArticleDetailAction())
  }, []);

  useEffect(() => {
    goToTop();
  }, []);
  const Scrollref = useRef();

  const goToTop = () => {
    Scrollref.current.scrollTo({ x: 0, y: 0, animated: true });
  }
  const getIndex = () => {
    var index = detailsData.findIndex(
      x => x.id == route?.params?.item?.id,
    );
    return index + 1;
  };

  // const source1 = source.replace(
  //   'lazyload',
  //   'text/javascript',
  // );

  const source = route?.params?.item?.content?.rendered;
  var source1 = source?.replace('lazyload', 'text/javascript');
  return (
    <View style={commonstyles.container}>
      <View>
        <View style={HeaderStyle.subHeadercustom}>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ zIndex: 999 }}>
              <Image
                source={require('../Assets/Images/arrow.png')}
                style={{ width: 18, height: 18, top: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.6,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'http://www.facebook.com/sharer.php?u=' +
                  route?.params?.item?.link +
                  '%3Futm_source%3Dreferral%26utm_medium%3DFB%26utm_campaign%3Dsocial_share&app_id=369158533547966',
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/facebook_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://twitter.com/intent/tweet?url=' +
                  route?.params?.item?.link,
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/twitter_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'whatsapp://send?text=' + route?.params?.item?.link,
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/whatsapp_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://t.me/share?url=' + route?.params?.item?.link + '&text=',
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/telegram_icon.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        ref={Scrollref}>
        <View>
          <View>
            <Image
              source={{ uri: route?.params?.item?.web_featured_image }}
              style={commonstyles.Detailslargecard}
            />
          </View>

          <View style={{ margin: 10 }}>
            <HTMLView
              value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
              stylesheet={headerStyles}
            />
          </View>

          <View style={{ flexDirection: 'row', start: 10 }}>
            <Text style={commonstyles.detailTime}>
              {moment(route?.params?.item?.date_gmt).format('MMMM DD , YYYY')} /{' '}
            </Text>
            <Text style={commonstyles.detailTime}>
              {moment(route?.params?.item?.modified)
                .utcOffset('+05:30')
                .format('hh.mm a')}{' '}
              IST{' '}
            </Text>
          </View>
          {/* description */}

          <View
            style={{
              width: screenWidth - 10,
              justifyContent: 'center',
              pointerEvents: 'none',
              paddingLeft: 10,
            }}>
            <AutoHeightWebView style={{ width: Dimensions.get('window').width - 15, marginTop: 35 }}
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
                margin:10;
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
                html: (source1 +=
                  "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>"),
                baseUrl: 'https://twitter.com',
              }}
              scalesPageToFit={false}
              viewportContent={'width=device-width, user-scalable=no'}

            />
          </View>

          {/* Related News */}
          <View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={commonstyles.relatedText}>Related News</Text>
            </View>
            {/* Related news FlatList */}
            {relatedData?.data !== 0 && { relatedLoading } ? (
              <View >

                <FlatList
                  showsHorizontalScrollIndicator={false}
                  persistentScrollbar={false}
                  data={relatedData?.data}
                  renderItem={({ item, index }) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Details', {
                            item: item,
                            // DetailsData: relatedData,
                          });
                        }}>
                        <View style={commonstyles.cardView}>
                          <View style={commonstyles.cateviewImg}>
                            <Image
                              source={{ uri: item?.web_featured_image }}
                              style={commonstyles.cateImage}
                            />
                          </View>
                          <View style={commonstyles.cateviewText}>
                            <Text
                              numberOfLines={2}
                              ellipsizeMode="tail"
                              style={commonstyles.latestText}>
                              {item?.title?.rendered}
                            </Text>
                            <View style={commonstyles.timeview}>
                              <Text style={commonstyles.latesttime}>
                                {moment(item?.date_gmt).format('DD-MMM-YYYY')}{' '}
                                ,{' '}
                              </Text>
                              <Text style={commonstyles.latesttime}>
                                {moment(item?.modified)
                                  .utcOffset('+05:30')
                                  .format('hh.mm a')}{' '}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                />

              </View>
            ) : (
              <View>
                <Text>Loading</Text>
              </View>
            )}
          </View>

          {/* next Articles */}
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              data={detailsData?.slice(
                getIndex(),
                getIndex() + 10,

              )}
              renderItem={({ item, index }) => (
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
                      <View style={{ flexDirection: 'row' }}>
                        <Feather
                          name="chevrons-down"
                          size={25}
                          color={appThemeColor}
                          style={{ marginTop: 3 }}
                        />

                        <Text style={commonstyles.nextText}>
                          Next Article
                        </Text>
                      </View>
                    </View>
                    <View >
                      <TouchableOpacity
                        onPress={() => {
                          Share.share({
                            message: item.link,
                          });
                        }}>
                        <MaterialIcons
                          name="share"
                          size={20}
                          color={appThemeColor}
                          style={{ top: 3 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={{ uri: item?.web_featured_image }}
                      style={commonstyles.Detailslargecard}
                    />
                  </View>

                  <View style={{ margin: 10 }}>
                    <HTMLView
                      value={'<p>' + item?.title?.rendered + '</p>'}
                      stylesheet={headerStyles}
                    />
                  </View>

                  <View style={{ flexDirection: 'row', start: 10 }}>
                    <Text style={commonstyles.detailTime}>
                      {moment(item?.date_gmt).format(
                        'MMMM DD , YYYY',
                      )}{' '}
                      /{' '}
                    </Text>
                    <Text style={commonstyles.detailTime}>
                      {moment(item?.modified)
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
                        html: (item.content.rendered +=
                          "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;color:#000;font-weight:500;font-size:18px}</style>"),
                        baseUrl: 'https://twitter.com',
                      }}
                      scalesPageToFit={false}
                      viewportContent={
                        'width=device-width, user-scalable=no'
                      }
                    />
                  </View>
                </View>
              )}
            />
          </View>
          {/* Flash News */}
          <View>
            <View style={{ marginLeft: 10 }}>
              <Text style={commonstyles.relatedText}>Flash News</Text>
            </View>
            <View style={commonstyles.photoview}>
              <View>

                <View>
                  <FlatList
                    data={latestNews?.data}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item, index }) => (
                      <View style={{ marginRight: 5, marginLeft: 10 }}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Details', {
                              item: item,
                            });
                          }}>
                          <View style={commonstyles.sliderView}>
                            <Image
                              source={{ uri: item.web_featured_image }}
                              style={commonstyles.photocard}
                            />
                            <LinearGradient
                              colors={['transparent', 'black']}
                              style={commonstyles.linearGradient}
                              start={{ x: 0.5, y: 0.2 }}
                              locations={[0.2, 0.8]}>
                              <Text
                                numberOfLines={2}
                                ellipsizeMode="tail"
                                style={commonstyles.flashtext}>
                                {item.title.rendered}
                              </Text>
                            </LinearGradient>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* {this.state.isLoading == false && (
          <View style={commonstyles.loading}>
            <ActivityIndicator color={appThemeColor} size="large" />
          </View>
        )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  p: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'Mandali-Regular',
    lineHeight: 30,
  },
});
const headerStyles = StyleSheet.create({
  p: {
    color: Header_text,
    fontSize: 24,
    fontFamily: 'Mandali-Bold',
    lineHeight: 30,
  },
});
const RelatedTextStyles = StyleSheet.create({
  p: { color: '#000', fontSize: 20, fontFamily: 'JIMS', lineHeight: 25, top: 10 },
});
type Props = {
  relatedData: Function,
  relatedLoading: Boolean,
  sliderData: Function,
  loading: Boolean,
  latestNews: Function,
  latestLoading: Boolean,
  articleDetailData: Function,
  articleDetailLoading: Boolean,

};

const mapStateToProps = state => ({
  relatedData: state.relatedReducer?.relatedData,
  relatedLoading: state.relatedReducer?.relatedLoading,
  sliderData: state.sliderReducer?.sliderData,
  loading: state.sliderReducer?.loading,
  latestNews: state.latestNewsReducer?.latestNews,
  latestLoading: state.latestNewsReducer?.latestLoading,
  articleDetailData: state.articleDetailReducer?.articleDetailData,
  articleDetailLoading: state.articleDetailReducer?.articleDetailLoading,
});
const mapDispatchToProps = {
  getRelatedAction,
  getArticleDetailAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
