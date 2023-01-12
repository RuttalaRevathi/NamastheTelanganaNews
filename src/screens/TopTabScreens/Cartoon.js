/* eslint-disable no-trailing-spaces */
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
import { commonstyles } from '../../styles/commonstyles';
import SubHeader from '../../components/SubHeader';
import { CartoonURl, ShareUrl } from '../../utilities/urls';
import getCartoonAction from '../../redux/actions/getCartoonAction';
import { connect, useDispatch } from 'react-redux';

const sharecall = () => {
    const Link_Url = ShareUrl + CartoonURl;
    Share.share({
        message: Link_Url,
    })
        .then((result) => console.log(result))
        .then((error) => console.log(error));
};
const Cartoon = ({ navigation,
    cartoonData,
    cartoonLoading, }:Props)=> {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartoonAction());

    }, []);

    return (
        <SafeAreaView styles={commonstyles.container}>
            <SubHeader
                title={"కార్టూన్"}
                isMenu={false}
                isBook={false}
                isShare={true}
                leftBtnClick={() => navigation.goBack()}
                ShareClick={() => {
                    sharecall();
                }}
                BookClick={() => {
                    alert('BookMark   Clicked');
                }}
            />
            <ScrollView>
                <View>

                    <View style={{ position: 'relative' }}>
                        <FlatList
                            style={commonstyles.cateflist}
                            data={cartoonData?.data}
                            numColumns={2}
                            renderItem={({ item, index }) =>
                                <View style={{ flex: 1, marginRight: 5 }}>
                                    <View style={commonstyles.CartoonCard}>
                                        <TouchableOpacity onPress={() => { navigation.navigate("CartoonArticle", { item: item }) }}  >
                                            <Image source={{ uri: item?.web_featured_image }} style={commonstyles.cartoonimg} resizeMode="contain" />

                                        </TouchableOpacity>
                                    </View>
                                </View>

                            }

                        />

                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};
type Props = {
    cartoonData: Function,
    cartoonLoading: Boolean,
};
const mapStateToProps = state => ({
    cartoonData: state.cartoonReducer?.cartoonData,
    cartoonLoading: state.cartoonReducer?.cartoonLoading,
});
const mapDispatchToProps = {
    getCartoonAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cartoon);