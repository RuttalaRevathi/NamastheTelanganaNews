/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, connect, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-web-swiper';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
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

  return (
    <ScrollView>
      <View style={{padding: 10}}>
        {/* Spinner */}
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading && latestLoading && cinemaLoading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={{color: '#FFF'}}
        />
        {/* Slider */}
        <View>
          <Carousel
            layout="default"
            ref={isCarousel}
            autoplay={true}
            autoplayDelay={100}
            autoplayInterval={100}
            data={sliderData?.data}
            // loop={true}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {
                    item: item,
                    detailsData: sliderData?.data,
                  });
                }}>
                <View style={commonstyles.sliderView} key={index}>
                  <FastImage
                    source={{uri: item.web_featured_image}}
                    style={commonstyles.slidercard}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontFamily: 'Mandali-Bold',
                      }}>
                      {index + 1}/{sliderData?.data?.length}
                    </Text>
                  </View>
                  <LinearGradient
                    colors={[
                      'rgba(0,0,0,0)',
                      'rgba(0,0,0,.8)',
                      'rgba(0,0,0,1)',
                    ]}
                    style={commonstyles.sliderGradient}>
                    <Text style={commonstyles.slidertext}>
                      {item.title.rendered}
                    </Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            )}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            style={commonstyles.pagination}
            carouselRef={isCarousel}
            dotStyle={{display: 'none'}}
            enableMomentum={true}
          />
        </View>
        {/* LatestNews */}
        <HomeUI
          categoryName="తాజావార్తలు"
          data={latestNews?.data}
          navigationScreen="LatestNews"
          navigation={navigation}
        />
        {/* Cinema */}
        <HomeUI
          categoryName="సినిమా"
          data={cinemaData?.data}
          navigationScreen="సినిమా"
          navigation={navigation}
        />
        {/* RasiPhalalu */}
        <HomeUI
          categoryName="రాశి ఫలాలు"
          data={rasiPhalaluData?.data}
          navigationScreen="రాశి ఫలాలు"
          navigation={navigation}
        />
        {/* Cartoon */}
        <View>
          {/* Cartoon   text*/}
          <View style={commonstyles.categoryMview}>
            <View style={commonstyles.categoryView}>
              <View>
                <Text style={commonstyles.Category}>{'కార్టూన్‌'}</Text>
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
                renderItem={({ item, index }) => (
                  <View style={{ flex: 1 }}>
                    <View style={commonstyles.CartoonCard}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CartoonArticle', {
                            item: item,
                            detailsData: cartoonData?.data,
                          });
                        }}>
                        <Image
                          source={{ uri: item.web_featured_image }}
                          style={commonstyles.cartoonimg}
                        />
                        <View>
                          <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={commonstyles.SportText}>
                            {item.title.rendered}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
              {/* more text */}
              <View style={commonstyles.moreview}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('కార్టూన్‌');
                  }}>
                  <Text style={commonstyles.moretext}>More . . .</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Health */}
        <HomeUI
          categoryName="ఆరోగ్యం"
          data={healthData?.data}
          navigationScreen="ఆరోగ్యం"
          navigation={navigation}
        />
        {/* Hyderabad */}
        <HomeUI
          categoryName="హైదరాబాద్‌"
          data={hyderabadData?.data}
          navigationScreen="హైదరాబాద్‌"
          navigation={navigation}
        />
        {/* telangana */}
        <HomeUI
          categoryName="తెలంగాణ"
          data={telanganaData?.data}
          navigationScreen="తెలంగాణ"
          navigation={navigation}
        />
        {/* ap */}
        <HomeUI
          categoryName="ఏపీ"
          data={apData?.data}
          navigationScreen="ఏపీ"
          navigation={navigation}
        />
        {/* national */}
        <HomeUI
          categoryName="జాతీయం"
          data={nationalData?.data}
          navigationScreen="జాతీయం"
          navigation={navigation}
        />
        {/* International */}
        <HomeUI
          categoryName="అంతర్జాతీయం"
          data={interNationalData?.data}
          navigationScreen="అంతర్జాతీయం"
          navigation={navigation}
        />
        {/* sports */}
        <HomeUI
          categoryName="స్పోర్ట్స్"
          data={sportsData?.data}
          navigationScreen="స్పోర్ట్స్"
          navigation={navigation}
        />
        {/* Business */}
        <HomeUI
          categoryName="బిజినెస్"
          data={businessData?.data}
          navigationScreen="బిజినెస్"
          navigation={navigation}
        />
        {/* Nri */}
        <HomeUI
          categoryName="ఎన్‌ఆర్‌ఐ"
          data={nriData?.data}
          navigationScreen="ఎన్‌ఆర్‌ఐ"
          navigation={navigation}
        />
          {/* Photo Gallery */}
          <View>
          {/*photo gallery  text*/}

          <View style={commonstyles.photoview}>
            <View style={commonstyles.phototextview}>
              <View style={{ flex: 1.7 }}>
                <Text style={commonstyles.ptext}>ఫోటో గ్యాలరీ</Text>
              </View>
            </View>
            {/* photo gallery  Cards*/}
            <View>
              <View>
                <FlatList
                  data={photosData?.data}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item, index }) => (
                    <View style={{ marginRight: 5, marginLeft: 10 }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate(
                            'PhotoArticle',
                            {
                              item: item,
                              detailsData: photosData?.data,
                            },
                          );
                        }}>
                        <View style={commonstyles.sliderView}>
                          <Image
                            source={{ uri: item.web_featured_image }}
                            style={commonstyles.photocard}
                          />
                          <LinearGradient
                            colors={['transparent', 'white']}
                            style={commonstyles.linearGradient}
                            start={{ x: 0.5, y: 0.2 }}
                            locations={[0.2, 0.8]}>
                            <Text
                              numberOfLines={2}
                              ellipsizeMode="tail"
                              style={commonstyles.phototext}>
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
          {/* more text */}
          <View style={commonstyles.moreview}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ఫొటోలు');
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
                <Text style={commonstyles.ptext}>వీడియోలు</Text>
              </View>
            </View>
            {/* videos  Cards*/}
            <View>
              <View>
                <FlatList
                  data={videosData?.data}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item, index }) => (
                    <View style={{ marginRight: 5, marginLeft: 10 }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('VideoArticle', {
                            item: item,
                            detailsData: videosData?.data,
                          });
                        }}>
                        <View style={commonstyles.sliderView}>
                          <ImageBackground
                            imageStyle={{ borderRadius: 6 }}
                            source={{ uri: item.web_featured_image }}
                            style={commonstyles.videocard}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignSelf: 'center',
                                marginVertical: 100,
                              }}>
                              <Image
                                style={{ width: 30, height: 20 }}
                                source={require('../Assets/Images/videoicon.png')}
                              />
                            </View>
                          </ImageBackground>
                          <LinearGradient
                            colors={['transparent', 'white']}
                            style={commonstyles.linearGradient}
                            start={{ x: 0.5, y: 0.2 }}
                            locations={[0.2, 0.8]}>
                            <Text
                              numberOfLines={2}
                              ellipsizeMode="tail"
                              style={commonstyles.phototext}>
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
          {/* more text */}
          <View style={commonstyles.moreview}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('వీడియోలు');
              }}>
              <Text style={commonstyles.moretext}>More . . .</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* EditPage */}
        <HomeUI
          categoryName="ఎడిట్‌ పేజీ"
          data={editPageData?.data}
          navigationScreen="ఎడిట్‌ పేజీ"
          navigation={navigation}
        />
       
        {/* Zindagi */}
        <HomeUI
          categoryName="జిందగీ"
          data={zindagiData?.data}
          navigationScreen="జిందగీ"
          navigation={navigation}
        />
        {/* Bathukamma */}
        <HomeUI
          categoryName="బతుకమ్మ"
          data={bathukammaData?.data}
          navigationScreen="బతుకమ్మ"
          navigation={navigation}
        />
        {/* Agriculture */}
        <HomeUI
          categoryName="వ్యవసాయం"
          data={agricultureData?.data}
          navigationScreen="వ్యవసాయం"
          navigation={navigation}
        />
        {/* Cooking */}
        <HomeUI
          categoryName="వంటలు"
          data={cookingData?.data}
          navigationScreen="వంటలు"
          navigation={navigation}
        />
        {/* Vaasthu */}
        <HomeUI
          categoryName="వాస్తు"
          data={vaasthuData?.data}
          navigationScreen="వాస్తు"
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
