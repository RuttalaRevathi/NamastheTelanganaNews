/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
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
import FastImage from 'react-native-fast-image';
import SubHeader from '../../components/SubHeader';
import getPhotoGalleryAction from '../../redux/actions/getPhotoGalleryAction';
import {appThemeColor, commonstyles} from '../../styles/commonstyles';

const PhotoGallery = ({
  navigation,
  photosData,
  photosLoading,
  route,
}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotoGalleryAction());
  }, []);
  // share function
  return (
    <SafeAreaView styles={commonstyles.container}>
      <SubHeader
        title={'ఫొటోలు '}
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
        {photosData?.data?.length !== 0 ?
          <View>
            <FlatList
              style={commonstyles.cateflist}
              data={photosData?.data}
              numColumns={2}
              renderItem={({item, index}) => (
                <View style={{flex: 1}}>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('PhotoArticle', {
                          item: item,
                        });
                      }}>
                      <View style={commonstyles.latestMainView}>
                        <View style={commonstyles.latestsubView}>
                          <View>
                            <FastImage 
                              style={commonstyles.latestimgTag}
                              source={{uri: item.web_featured_image}}
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
          </View>
          :
            <View style={commonstyles.spinnerView}>
              <ActivityIndicator color={appThemeColor} size='large' />
              <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
            </View>
          }
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

type Props = {
  photosData: Function,
  photosLoading: Boolean,
};

const mapStateToProps = state => ({
  photosData: state.photosGalleryReducer?.photosData,
  photosLoading: state.photosGalleryReducer?.photosLoading,
});
const mapDispatchToProps = {
  getPhotoGalleryAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
