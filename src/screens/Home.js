/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-web-swiper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import getSliderAction from '../redux/actions/getSliderAction';

import {
  appThemeColor,
  blackcolor,
  commonstyles,
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../styles/commonstyles';
import LinearGradient from 'react-native-linear-gradient';
import HomeUI from '../components/HomeUI';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeCarouselItem from '../components/HomeCarouselItem';
import HomeCartoonItem from '../components/HomeCartoonItem';
import HomePhotogalleryItem from '../components/HomePhotogalleryItem';
import HomeVideosgalleryItem from '../components/HomeVideosgalleryItem';

const Home = ({
  navigation,
  sliderData,
  loading,
  latestNews,
  latestLoading,
  cinemaData,
  cinemaLoading,
  rasiPhalaluData,
  rasiPhalaluLoading,
  cartoonData,
  cartoonLoading,
  healthData,
  healthLoading,
  hyderabadData,
  hyderabadLoading,
  telanganaData,
  telanganaLoaing,
  apData,
  apLoading,
  nationalData,
  nationalLoading,
  interNationalData,
  interNationalLoading,
  sportsData,
  sportsLoading,
  businessData,
  businessLoading,
  nriData,
  nriLoading,
  editPageData,
  ediPageLoading,
  zindagiData,
  zindagiLoading,
  bathukammaData,
  bathukammaLoading,
  agricultureData,
  agricultureLoading,
  cookingData,
  cookingLoading,
  vaasthuData,
  vaasthuLoading,
  videosData,
  videosLoading,
  photosData,
  photosLoading,
}: Props) => {
  // let decode = require('html-entities-decoder');
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  sliderData = useSelector(state => state.sliderReducer.sliderData);
  loading = useSelector(state => state.sliderReducer.loading);
  latestNews = useSelector(state => state.latestNewsReducer.latestNews);
  latestLoading = useSelector(state => state.latestNewsReducer.latestLoading);
  cinemaData = useSelector(state => state.cinemaReducer.cinemaData);
  cinemaLoading = useSelector(state => state.cinemaReducer.cinemaLoading);
  rasiPhalaluData = useSelector(
    state => state.rasiPhalauReducer.rasiPhalaluData,
  );
  rasiPhalaluLoading = useSelector(
    state => state.rasiPhalauReducer.rasiPhalaluLoading,
  );
  cartoonData = useSelector(state => state.cartoonReducer.cartoonData);
  cartoonLoading = useSelector(state => state.cartoonReducer.cartoonLoading);
  healthData = useSelector(state => state.healthReducer.healthData);
  healthLoading = useSelector(state => state.healthReducer.healthLoading);
  hyderabadData = useSelector(state => state.hyderabadReducer.hyderabadData);
  hyderabadLoading = useSelector(
    state => state.hyderabadReducer.hyderabadLoading,
  );
  telanganaData = useSelector(state => state.telanganaReducer.telanganaData);
  telanganaLoaing = useSelector(
    state => state.telanganaReducer.telanganaLoaing,
  );
  apData = useSelector(state => state.apReducer.apData);
  apLoading = useSelector(state => state.apReducer.apLoading);
  nationalData = useSelector(state => state.nationalReducer.nationalData);
  nationalLoading = useSelector(state => state.nationalReducer.nationalLoading);
  interNationalData = useSelector(
    state => state.interNationalReducer.interNationalData,
  );
  interNationalLoading = useSelector(
    state => state.interNationalReducer.interNationalLoading,
  );
  sportsData = useSelector(state => state.sportsReducer.sportsData);
  sportsLoading = useSelector(state => state.sportsReducer.sportsLoading);
  nriData = useSelector(state => state.nriReducer.nriData);
  nriLoading = useSelector(state => state.nriReducer.nriLoading);
  editPageData = useSelector(state => state.editPageReducer.editPageData);
  ediPageLoading = useSelector(state => state.editPageReducer.ediPageLoading);
  zindagiData = useSelector(state => state.zindagiReducer.zindagiData);
  zindagiLoading = useSelector(state => state.zindagiReducer.zindagiLoading);
  bathukammaData = useSelector(state => state.bathukammaReducer.bathukammaData);
  bathukammaLoading = useSelector(
    state => state.bathukammaReducer.bathukammaLoading,
  );
  agricultureData = useSelector(
    state => state.agricultureReducer.agricultureData,
  );
  agricultureLoading = useSelector(
    state => state.agricultureReducer.agricultureLoading,
  );
  cookingData = useSelector(state => state.cookingReducer.cookingData);
  cookingLoading = useSelector(state => state.cookingReducer.cookingLoading);
  vaasthuData = useSelector(state => state.vaasthuReducer.vaasthuData);
  vaasthuLoading = useSelector(state => state.vaasthuReducer.vaasthuLoading);
  videosData = useSelector(state => state.videoReducer.videosData);
  videosLoading = useSelector(state => state.videoReducer.videosLoading);
  businessData = useSelector(state => state.businessReducer.businessData);
  businessLoading = useSelector(state => state.businessReducer.businessLoading);
  photosData = useSelector(state => state.photosGalleryReducer.photosData);
  photosLoading = useSelector(
    state => state.photosGalleryReducer.photosLoading,
  );
  const dispatch = useDispatch();
  const [totalLoading, setTotalLoading] = useState(false);
  // console.log(
  //   'slider data=============================================>',
  //   JSON.stringify(sliderData),
  // );
  const carouselItem = ({ item, index }) => (
    <HomeCarouselItem
      item={item}
      propsdata={sliderData?.data}
      navigation={navigation}
      index={index}

    />
  );
  const cartoonItem = ({ item, index }) => (
    <HomeCartoonItem
      item={item}
      propsdata={cartoonData?.data}
      navigation={navigation}
      index={index}

    />
  );
  const photoGalleryItem = ({ item, index }) => (
    <HomePhotogalleryItem
      item={item}
      propsdata={photosData?.data}
      navigation={navigation}
      index={index}
    />
  );

  const videoGalleryitem = ({ item, index }) => (
    <HomeVideosgalleryItem
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );


  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        {/* Spinner */}
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading && latestLoading && cinemaLoading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={{ color: '#FFF' }}
        />
        {/* Slider */}
        <View>
          <Carousel
            layout="default"
            ref={isCarousel}
            autoplay={true}
            // autoplayDelay={100}
            // autoplayInterval={100}
            data={sliderData?.data}
            renderItem={carouselItem}
            // loop={true}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            style={commonstyles.pagination}
            carouselRef={isCarousel}
            dotStyle={{ display: 'none' }}
            enableMomentum={true}
          />
        </View>
        {/* LatestNews */}
        <HomeUI
          categoryName="?????????????????????????????????"
          data={latestNews?.data?.filter(obj => {
            return obj.format === 'standard';
          })}
          navigationScreen="LatestNews"
          navigation={navigation}
        />
        {/* Cinema */}
        <HomeUI
          categoryName="??????????????????"
          data={cinemaData?.data}
          navigationScreen="??????????????????"
          navigation={navigation}
        />
        {/* RasiPhalalu */}
        <HomeUI
          categoryName="???????????? ???????????????"
          data={rasiPhalaluData?.data}
          navigationScreen="???????????? ???????????????"
          navigation={navigation}
        />
        {/* Cartoon */}
        <View>
          {/* Cartoon   text*/}
          <View style={commonstyles.categoryMview}>
            <View style={commonstyles.categoryView}>
              <View>
                <Text style={commonstyles.Category}>{'???????????????????????????'}</Text>
              </View>
              <View style={commonstyles.dot}>
                <FontAwesome name="circle" size={10} color={appThemeColor} />
              </View>
            </View>
          </View>
          {/* Cartoon  Cards*/}
          <View>
            <View>
              <FlatList
                style={[commonstyles.bgDarkGrey]}
                data={cartoonData?.data}
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                renderItem={cartoonItem}
              />
              {/* more text */}
              <View style={commonstyles.moreview}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('???????????????????????????');
                  }}>
                  <Text style={commonstyles.moretext}>More . . .</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Health */}
        <HomeUI
          categoryName="?????????????????????"
          data={healthData?.data}
          navigationScreen="?????????????????????"
          navigation={navigation}
        />
        {/* Hyderabad */}
        <HomeUI
          categoryName="??????????????????????????????"
          data={hyderabadData?.data}
          navigationScreen="??????????????????????????????"
          navigation={navigation}
        />
        {/* telangana */}
        <HomeUI
          categoryName="?????????????????????"
          data={telanganaData?.data}
          navigationScreen="?????????????????????"
          navigation={navigation}
        />
        {/* ap */}
        <HomeUI
          categoryName="????????????????????????????????????"
          data={apData?.data}
          navigationScreen="????????????????????????????????????"
          navigation={navigation}
        />
        {/* national */}
        <HomeUI
          categoryName="??????????????????"
          data={nationalData?.data}
          navigationScreen="??????????????????"
          navigation={navigation}
        />
        {/* International */}
        <HomeUI
          categoryName="?????????????????????????????????"
          data={interNationalData?.data}
          navigationScreen="?????????????????????????????????"
          navigation={navigation}
        />
        {/* sports */}
        <HomeUI
          categoryName="??????????????????????????????"
          data={sportsData?.data}
          navigationScreen="??????????????????????????????"
          navigation={navigation}
        />
        {/* Business */}
        <HomeUI
          categoryName="????????????????????????"
          data={businessData?.data}
          navigationScreen="????????????????????????"
          navigation={navigation}
        />
        {/* Nri */}
        <HomeUI
          categoryName="???????????????????????????"
          data={nriData?.data}
          navigationScreen="???????????????????????????"
          navigation={navigation}
        />
        {/* Photo Gallery */}
        <View>
          {/*photo gallery  text*/}

          <View style={commonstyles.photoview}>
            <View style={commonstyles.phototextview}>
              <View style={{ flex: 1.7 }}>
                <Text style={commonstyles.ptext}>???????????? ?????????????????????</Text>
              </View>
            </View>
            {/* photo gallery  Cards*/}
            <View>
              <View>
                <FlatList
                  data={photosData?.data}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={photoGalleryItem}
                />
              </View>

            </View>
          </View>
          {/* more text */}
          <View style={commonstyles.moreview}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('??????????????????');
              }}>
              <Text style={commonstyles.moretext}>More . . .</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* videos Gallery */}
        <View>
          {/*videos  text*/}

          <View style={commonstyles.photoview}>
            <View style={commonstyles.phototextview}>
              <View style={{ flex: 1.7 }}>
                <Text style={commonstyles.ptext}>????????????????????????</Text>
              </View>
            </View>
            {/* videos  Cards*/}
            <View>
              <View>
                <FlatList
                  data={videosData?.data}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={videoGalleryitem}
                />

              </View>

            </View>
          </View>
          {/* more text */}
          <View style={commonstyles.moreview}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('????????????????????????');
              }}>
              <Text style={commonstyles.moretext}>More . . .</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* EditPage */}
        <HomeUI
          categoryName="?????????????????? ????????????"
          data={editPageData?.data}
          navigationScreen="?????????????????? ????????????"
          navigation={navigation}
        />

        {/* Zindagi */}
        <HomeUI
          categoryName="??????????????????"
          data={zindagiData?.data}
          navigationScreen="??????????????????"
          navigation={navigation}
        />
        {/* Bathukamma */}
        <HomeUI
          categoryName="?????????????????????"
          data={bathukammaData?.data}
          navigationScreen="?????????????????????"
          navigation={navigation}
        />
        {/* Agriculture */}
        <HomeUI
          categoryName="????????????????????????"
          data={agricultureData?.data}
          navigationScreen="????????????????????????"
          navigation={navigation}
        />
        {/* Cooking */}
        <HomeUI
          categoryName="???????????????"
          data={cookingData?.data}
          navigationScreen="???????????????"
          navigation={navigation}
        />
        {/* Vaasthu */}
        <HomeUI
          categoryName="??????????????????"
          data={vaasthuData?.data}
          navigationScreen="??????????????????"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

type Props = {
  sliderData: Function,
  loading: Boolean,
  latestNews: Function,
  latestLoading: Boolean,
  cinemaData: Function,
  cinemaLoading: Boolean,
  rasiPhalaluData: Function,
  rasiPhalaluLoading: Boolean,
  cartoonData: Function,
  cartoonLoading: Boolean,
  healthData: Function,
  healthLoading: Boolean,
  hyderabadData: Function,
  hyderabadLoading: Boolean,
  telanganaData: Function,
  telanganaLoaing: Boolean,
  apData: Function,
  apLoading: Boolean,
  nationalData: Function,
  nationalLoading: Boolean,
  interNationalData: Function,
  interNationalLoading: Boolean,
  sportsData: Function,
  sportsLoading: Boolean,
  businessData: Function,
  businessLoading: Boolean,
  nriData: Function,
  nriLoading: Boolean,
  editPageData: Function,
  ediPageLoading: Boolean,
  zindagiData: Function,
  zindagiLoading: Boolean,
  bathukammaData: Function,
  bathukammaLoading: Boolean,
  agricultureData: Function,
  agricultureLoading: Boolean,
  cookingData: Function,
  cookingLoading: Boolean,
  vaasthuData: Function,
  vaasthuLoading: Boolean,
};

export default Home;
