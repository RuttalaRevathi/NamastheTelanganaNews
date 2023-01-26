/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
// import getWarangalAction from '../../redux/actions/getDistrictsAction';
import CategoryUI from '../../components/CategoryUI';
import { getWarangalAction } from '../../redux/actions/getWarangalAction';


const WarangalScreen = ({
    navigation,
    warangalData,
    warangalLoading,
    route,
}: Props) => {

    warangalData = useSelector(state => state.warangalReducer.warangalData);
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


export default WarangalScreen;
