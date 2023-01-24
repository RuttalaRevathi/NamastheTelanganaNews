/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getAdilabadAction } from '../../redux/actions/getAdilabadAction';


const AdilabadScreen = ({
    navigation,
    adilabadData,
    adilabadLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdilabadAction());
console.log(adilabadData,"=======================>adilabad data");
    }, []);


    return (
        <CategoryUI
        data = {adilabadData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="warangal-rural"
        />
    );
};

type Props = {
    adilabadData: Function,
    adilabadLoading: Boolean,
};
const mapStateToProps = state => ({
    adilabadData: state.adilabadReducer?.adilabadData,
    adilabadLoading: state.adilabadReducer?.adilabadLoading,
});
const mapDispatchToProps = {
    getAdilabadAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdilabadScreen);
