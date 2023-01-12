/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getNationalAction from '../../redux/actions/getNationalAction';
import CategoryUI from '../../components/CategoryUI';


const NationalScreen = ({
    navigation,
    nationalData,
    nationalLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNationalAction('national'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {nationalData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="national"
        />
    );
};

type Props = {
    nationalData: Function,
    nationalLoading: Boolean,
};
const mapStateToProps = state => ({
    nationalData: state.nationalReducer?.nationalData,
    nationalLoading: state.nationalReducer?.nationalLoading,
});
const mapDispatchToProps = {
    getNationalAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NationalScreen);
