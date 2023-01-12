/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getAgricultureAction from '../../redux/actions/getAgricultureAction';
import CategoryUI from '../../components/CategoryUI';


const AgricultureScreen = ({
    navigation,
    agricultureData,
    agricultureLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAgricultureAction('agriculture'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {agricultureData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="agriculture"
        />
    );
};

type Props = {
    agricultureData: Function,
    agricultureLoading: Boolean,
};
const mapStateToProps = state => ({
    agricultureData: state.agricultureReducer?.agricultureData,
    agricultureLoading: state.agricultureReducer?.agricultureLoading,
});
const mapDispatchToProps = {
    getAgricultureAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(AgricultureScreen);
