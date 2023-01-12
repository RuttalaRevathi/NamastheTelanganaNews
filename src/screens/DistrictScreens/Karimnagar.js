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
    karimnagarData = useSelector(state => state.karimnagarReducer.karimnagarData);

    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getKarimnagarAction());

    }, []);
    console.log(karimnagarData,"==========================karimnagarData");

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
// const mapStateToProps = state => ({
//     karimnagarData: state.karimnagarReducer?.karimnagarData,
//     karimnagarLoading: state.karimnagarReducer?.karimnagarLoading,
// });
// const mapDispatchToProps = {
//     getKarimnagarAction,
// };

export default KarimnagarScreen;
