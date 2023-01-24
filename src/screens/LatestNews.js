/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SubHeader from '../components/SubHeader';
import { commonstyles } from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';


const LatestNews = ({
  navigation,
  route,
}: Props) => {
  const latestNews = useSelector(state => state.latestNewsReducer.latestNews);
  const latestLoading = useSelector(state => state.latestNewsReducer.latestLoading);
  return (
    <SafeAreaView styles={commonstyles.container}>
      <SubHeader
        title={'తాజావార్తలు '}
        isMenu={false}
        isBook={false}
        isShare={true}
        leftBtnClick={() => navigation.goBack()}
        ShareClick={() => {
          this.sharecall();
        }}
        BookClick={() => {
          alert('BookMark   Clicked');
        }}
      />
      <ScrollView>
        <View>
          <View style={{ position: 'relative' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={latestNews.data?.slice(0, 1)}
              renderItem={({ item, index }) => (
                <View style={{ marginRight: 5, marginLeft: 5, marginTop: 10 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', {
                        item: item, detailsData: latestNews?.data,
                      });
                    }}>
                    <View style={commonstyles.sliderView}>
                      <FastImage
                        source={{ uri: item?.web_featured_image }}
                        style={commonstyles.slidercard}
                      />
                      <LinearGradient
                        colors={[
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,.8)',
                          'rgba(0,0,0,1)',
                        ]}
                        style={commonstyles.sliderGradient}>
                        <Text style={commonstyles.slidertext}>
                          {item?.title?.rendered}
                        </Text>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
            <FlatList
              style={commonstyles.cateflist}
              data={latestNews?.data?.slice(1, -1)}
              renderItem={({ item, index }) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', {
                        item: item, detailsData: latestNews?.data,
                      });
                    }}>
                    <View style={commonstyles.cardView}>
                      <View style={commonstyles.cateviewImg}>
                        <FastImage
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
      </ScrollView>

      {/* {
            this.state.isLoading == false &&

            <View style={commonstyles.loading}>
                <ActivityIndicator color={appThemeColor} size='large' />
            </View>
        } */}


    </SafeAreaView>
  );
};

export default LatestNews;
