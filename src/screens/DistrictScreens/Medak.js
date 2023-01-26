/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getMedakAction } from '../../redux/actions/getMedakAction';


const MedakScreen = ({
    navigation,
    medakData,
    medakLoading,
    route,
}: Props) => {
    medakData = useSelector(state => state?.medakReducer?.medakData);
   
    return (
        <CategoryUI
        data = {medakData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="medak"
        />
    );
};

type Props = {
    medakData: Function,
    medakLoading: Boolean,
};


export default MedakScreen;
