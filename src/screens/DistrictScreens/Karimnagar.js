/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getKarimnagarAction } from '../../redux/actions/getKarimnagarAction';


const KarimnagarScreen = ({
    navigation,
    karimnagarData,
    karimnagarLoading,
    route,
}: Props) => {

    karimnagarData = useSelector(state => state?.karimnagarReducer?.karimnagarData);

    return (
        <CategoryUI
        data = {karimnagarData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="karimnagar"
        />
    );
};

type Props = {
    karimnagarData: Function,
    karimnagarLoading: Boolean,
};


export default KarimnagarScreen;
