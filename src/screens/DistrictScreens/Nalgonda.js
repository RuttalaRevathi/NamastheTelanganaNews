/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getNalgondaAction } from '../../redux/actions/getNalgondaAction';


const NalgondaScreen = ({
    navigation,
    nalgondaData,
    nalgondaLoading,
    route,
}: Props) => {
    nalgondaData = useSelector(state => state?.nalgondaReducer?.nalgondaData);

    return (
        <CategoryUI
        data = {nalgondaData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="nalgonda"
        />
    );
};

type Props = {
    nalgondaData: Function,
    nalgondaLoading: Boolean,
};


export default NalgondaScreen;
