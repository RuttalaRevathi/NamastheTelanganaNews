/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getNizamabadAction } from '../../redux/actions/getNizamabadAction';


const NizamabadScreen = ({
    navigation,
    nizamabadData,
    nizamabadLoading,
    route,
}: Props) => {

    nizamabadData = useSelector(state => state?.nizamabadReducer?.nizamabadData);

    // share function

    return (
        <CategoryUI
        data = {nizamabadData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="nizamabad"
        />
    );
};

type Props = {
    nizamabadData: Function,
    nizamabadLoading: Boolean,
};


export default NizamabadScreen;
