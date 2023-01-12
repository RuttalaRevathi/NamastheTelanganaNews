/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getZindagiAction from '../../redux/actions/getZindagiAction';
import CategoryUI from '../../components/CategoryUI';


const ZindagiScreen = ({
    navigation,
    zindagiData,
    zindagiLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getZindagiAction('zindagi'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {zindagiData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="zindagi"
        />
    );
};

type Props = {
    zindagiData: Function,
    zindagiLoading: Boolean,
};
const mapStateToProps = state => ({
    zindagiData: state.zindagiReducer?.zindagiData,
    zindagiLoading: state.zindagiReducer?.zindagiLoading,
});
const mapDispatchToProps = {
    getZindagiAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ZindagiScreen);
