/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getMedakAction } from '../../redux/actions/getMedakAction';


const MedakScreen = ({
    navigation,
    medakData,
    medakLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMedakAction());

    }, []);
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
const mapStateToProps = state => ({
    medakData: state.medakReducer?.medakData,
    medakLoading: state.medakReducer?.medakLoading,
});
const mapDispatchToProps = {
    getMedakAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MedakScreen);
