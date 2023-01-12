/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getNalgondaAction } from '../../redux/actions/getNalgondaAction';


const NalgondaScreen = ({
    navigation,
    nalgondaData,
    nalgondaLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNalgondaAction());

    }, []);

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
const mapStateToProps = state => ({
    nalgondaData: state.nalgondareducer?.nalgondaData,
    nalgondaLoading: state.nalgondareducer?.nalgondaLoading,
});
const mapDispatchToProps = {
    getNalgondaAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NalgondaScreen);
