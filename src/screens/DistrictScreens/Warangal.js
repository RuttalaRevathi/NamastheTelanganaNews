/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
// import getWarangalAction from '../../redux/actions/getDistrictsAction';
import CategoryUI from '../../components/CategoryUI';
import { getWarangalAction } from '../../redux/actions/getWarangalAction';


const WarangalScreen = ({
    navigation,
    warangalData,
    warangalLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWarangalAction());

    }, []);
    // share function

    return (
        <CategoryUI
        data = {warangalData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="warangal-rural"
        />
    );
};

type Props = {
    warangalData: Function,
    warangalLoading: Boolean,
};
const mapStateToProps = state => ({
    warangalData: state.warangalReducer?.warangalData,
    warangalLoading: state.warangalReducer?.warangalLoading,
});
const mapDispatchToProps = {
    getWarangalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(WarangalScreen);
