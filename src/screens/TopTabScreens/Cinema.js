/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Share } from 'react-native';
import getCinemaAction from '../../redux/actions/getCinemaAction';
import { Hyderabad, ShareUrl } from '../../utilities/urls';
import CategoryUI from '../../components/CategoryUI';


const CinemaScreen = ({
    navigation,
    cinemaData,
    cinemaLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCinemaAction('cinema'));

    }, []);
    
    return (
        <CategoryUI
        data = {cinemaData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="Cinema"
        />
    );
};

type Props = {
    cinemaData: Function,
    cinemaLoading: Boolean,
};
const mapStateToProps = state => ({
    cinemaData: state.cinemaReducer?.cinemaData,
    cinemaLoading: state.cinemaReducer?.cinemaLoading,
});
const mapDispatchToProps = {
    getCinemaAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CinemaScreen);
