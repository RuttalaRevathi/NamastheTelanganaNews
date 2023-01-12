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
import { commonstyles } from '../styles/commonstyles';
import SubHeader from '../components/SubHeader';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { ShareUrl } from '../utilities/urls';
import FastImage from 'react-native-fast-image';

const sharecall = (name) => {
  const Link_Url = ShareUrl + name;
  Share.share({
    message: Link_Url,
  })
    .then((result) => console.log(result))
    .then((error) => console.log(error));
};
function CategoryUI(props, { navigation }) {
  useEffect(() => {
    // console.log(props.data,"categorydata");            
  })

  return (
    <SafeAreaView styles={commonstyles.container}>
      <SubHeader
        title={props.title}
        isMenu={false}
        isBook={false}
        isShare={true}
        leftBtnClick={() => props.navigation.goBack()}
        ShareClick={() => {
          sharecall(props.categoryName);
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
              data={props.data?.data?.slice(0, 1)}
              renderItem={({ item, index }) => (
                <View style={{ marginRight: 5, marginLeft: 5, marginTop: 10 }}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('Details', {
                        item: item,detailsData:props.data?.data
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
              data={props.data?.data?.slice(1, -1)}
              renderItem={({ item, index }) => (
                <View>
                  <TouchableOpacity
                   onPress={() => {
                    props.navigation.navigate('Details', {
                      item: item,detailsData:props.data?.data
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
export default CategoryUI;