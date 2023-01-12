/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Share } from 'react-native';
import getRasiPhalaluAction from '../../redux/actions/getRasiPhalaluAction';
import { Hyderabad, ShareUrl } from '../../utilities/urls';
import CategoryUI from '../../components/CategoryUI';


const RasiPhalaluScreen = ({
    navigation,
    rasiPhalaluData,
    rasiPhalaluLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRasiPhalaluAction('horoscope'));

    }, []);

    return (
        <CategoryUI
        data = {rasiPhalaluData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="horoscope"
        />
    );
};

type Props = {
    rasiPhalaluData: Function,
    rasiPhalaluLoading: Boolean,
};
const mapStateToProps = state => ({
    rasiPhalaluData: state.rasiPhalauReducer?.rasiPhalaluData,
    rasiPhalaluLoading: state.rasiPhalauReducer?.rasiPhalaluLoading,
});
const mapDispatchToProps = {
    getRasiPhalaluAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(RasiPhalaluScreen);
