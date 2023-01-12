/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getHealthAction from '../../redux/actions/getHealthAction';
import CategoryUI from '../../components/CategoryUI';


const HealthScreen = ({
    navigation,
    healthData,
    healthLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHealthAction('health'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {healthData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="health"
        />
    );
};

type Props = {
    healthData: Function,
    healthLoading: Boolean,
};
const mapStateToProps = state => ({
    healthData: state.healthReducer?.healthData,
    healthLoading: state.healthReducer?.healthLoading,
});
const mapDispatchToProps = {
    getHealthAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(HealthScreen);
