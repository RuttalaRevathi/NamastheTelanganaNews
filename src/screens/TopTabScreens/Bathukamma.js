/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getbathukammaAction from '../../redux/actions/getBathukammaAction';
import CategoryUI from '../../components/CategoryUI';


const BathukammaScreen = ({
    navigation,
    bathukammaData,
    bathukammaLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getbathukammaAction('sunday'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {bathukammaData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="sunday"
        />
    );
};

type Props = {
    bathukammaData: Function,
    bathukammaLoading: Boolean,
};
const mapStateToProps = state => ({
    bathukammaData: state.bathukammaReducer?.bathukammaData,
    bathukammaLoading: state.bathukammaReducer?.bathukammaLoading,
});
const mapDispatchToProps = {
    getbathukammaAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(BathukammaScreen);
