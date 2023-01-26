/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getKhammamAction } from '../../redux/actions/getKhammamAction';


const KhammamScreen = ({
    navigation,
    khammamData,
    khammamLoading,
    route,
}: Props) => {

    khammamData = useSelector(state => state?.khammamReducer?.khammamData);

    return (
        <CategoryUI
        data = {khammamData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="kammam"
        />
    );
};

type Props = {
    khammamData: Function,
    khammamLoading: Boolean,
};



export default KhammamScreen;
