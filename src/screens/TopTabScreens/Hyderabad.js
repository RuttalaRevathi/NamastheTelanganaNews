/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getHyderabadAction from '../../redux/actions/getHyderabadAction';
import CategoryUI from '../../components/CategoryUI';


const HyderabadScreen = ({
    navigation,
    hyderabadData,
    hyderabadLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHyderabadAction('hyderabad'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {hyderabadData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="hyderabad"
        />
    );
};

type Props = {
    hyderabadData: Function,
    hyderabadLoading: Boolean,
};
const mapStateToProps = state => ({
    hyderabadData: state.hyderabadReducer?.hyderabadData,
    hyderabadLoading: state.hyderabadReducer?.hyderabadLoading,
});
const mapDispatchToProps = {
    getHyderabadAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(HyderabadScreen);
