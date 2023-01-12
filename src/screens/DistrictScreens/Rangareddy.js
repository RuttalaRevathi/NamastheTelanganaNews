/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getRangareddyAction } from '../../redux/actions/getRangareddyAction';


const RangareddyScreen = ({
    navigation,
    rangareddyData,
    rangareddyLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRangareddyAction());

    }, []);
    // console.log(
        
    //     JSON.stringify(rangareddyData),'rangareddy data=============================================>',
    //   );

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
const mapStateToProps = state => ({
    rangareddyData: state.rangareddyReducer?.rangareddyData,
    rangareddyLoading: state.rangareddyReducer?.rangareddyLoading,
});
const mapDispatchToProps = {
    getRangareddyAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RangareddyScreen);
