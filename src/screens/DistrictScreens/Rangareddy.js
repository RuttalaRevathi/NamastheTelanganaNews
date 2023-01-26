/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getRangareddyAction } from '../../redux/actions/getRangareddyAction';


const RangareddyScreen = ({
    navigation,
    rangareddyData,
    rangareddyLoading,
    route,
}: Props) => {
    rangareddyData = useSelector(state => state?.rangareddyReducer?.rangareddyData);
   
    return (
        <CategoryUI
        data = {rangareddyData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="rangareddy"
        />
    );
};

type Props = {
    rangareddyData: Function,
    rangareddyLoading: Boolean,
};


export default RangareddyScreen;
