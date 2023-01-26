/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
// import getMahabubnagarAction from '../../redux/actions/getDistrictsAction';
import CategoryUI from '../../components/CategoryUI';
import { getMahabubnagarAction } from '../../redux/actions/getMahabubnagarAction';


const MahabubnagarScreen = ({
    navigation,
    mahabubnagarData,
    mahabubnagarLoading,
    route,
}: Props) => {

    mahabubnagarData = useSelector(state => state?.mahabubnagarReducer?.mahabubnagarData);
    // share function

    return (
        <CategoryUI
        data = {mahabubnagarData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="mahabubnagar"
        />
    );
};

type Props = {
    mahabubnagarData: Function,
    mahabubnagarLoading: Boolean,
};


export default MahabubnagarScreen;
