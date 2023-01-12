/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getInterNationalAction from '../../redux/actions/getInterNationalAction';
import CategoryUI from '../../components/CategoryUI';


const InterNationalScreen = ({
    navigation,
    interNationalData,
    interNationalLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInterNationalAction('international'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {interNationalData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="international"
        />
    );
};

type Props = {
    interNationalData: Function,
    interNationalLoading: Boolean,
};
const mapStateToProps = state => ({
    interNationalData: state.interNationalReducer?.interNationalData,
    interNationalLoading: state.interNationalReducer?.interNationalLoading,
});
const mapDispatchToProps = {
    getInterNationalAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(InterNationalScreen);
