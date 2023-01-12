/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Share,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { appThemeColor, commonstyles } from '../styles/commonstyles';
import SubHeader from '../components/SubHeader';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



function HomeUI(props, { navigation }) {
  useEffect(() => {
    // console.log(props.data,"categorydata");            
  })

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View>
          {/* LatestNews  text*/}

          <View style={commonstyles.categoryMview}>
            <View style={commonstyles.categoryView}>
              <View>
                <Text style={commonstyles.Category}>{props?.categoryName}</Text>
              </View>
              <View style={commonstyles.dot}>
                <FontAwesome name="circle" size={10} color={appThemeColor} />
              </View>
            </View>
          </View>
          {/* flatlist for Latest News */}
          <View>
            <View style={commonstyles.flatView}>
              <FlatList
                style={commonstyles.bgDarkGrey}
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                numColumns={2}
                data={props?.data?.slice(0, 2)}
                renderItem={({ item, index }) => (
                  <View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate('Details', { item: item,detailsData:props?.data });
                        }}>
                        <View style={commonstyles.latestMainView}>
                          <View style={commonstyles.latestsubView}>
                            <View>
                              <FastImage
                                style={commonstyles.latestimgTag}
                                source={{ uri: item?.web_featured_image, cache: FastImage.cacheControl.immutable}}
                              />
                            </View>
                            <View>
                              <Text
                                numberOfLines={2}
                                ellipsizeMode="tail"
                                style={commonstyles.latestTxtTag}>
                                {item?.title?.rendered}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
              <View >
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  persistentScrollbar={false}
                  data={props?.data?.slice(2, 8)}
                  renderItem={({ item, index }) => (
                    <View>
                      <TouchableOpacity
                       onPress={() => {
                         props.navigation.navigate('Details', { item: item,detailsData:props?.data });
                       }}>
                        <View style={commonstyles.cardViewHome}>
                          <View style={commonstyles.cateviewImg}>
                            <FastImage
                              source={{ uri: item?.web_featured_image , cache: FastImage.cacheControl.immutable}}
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
                                {moment(item?.date_gmt).format('DD-MMM-YYYY')} ,{' '}
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
            </View>
          </View>
          {/* more text */}
          <View style={commonstyles.moreview}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(props.navigationScreen);
              }}>
              <Text style={commonstyles.moretext}>More . . .</Text>

            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
    </SafeAreaView>
  );
};
export default HomeUI;