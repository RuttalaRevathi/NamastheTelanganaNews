/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getVaasthuAction from '../../redux/actions/getVaasthuAction';
import CategoryUI from '../../components/CategoryUI';


const VaasthuScreen = ({
    navigation,
    vaasthuData,
    vaasthuLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVaasthuAction('vaasthu'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {vaasthuData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="vaasthu"
        />
    );
};

type Props = {
    vaasthuData: Function,
    vaasthuLoading: Boolean,
};
const mapStateToProps = state => ({
    vaasthuData: state.vaasthuReducer?.vaasthuData,
    vaasthuLoading: state.vaasthuReducer?.vaasthuLoading,
});
const mapDispatchToProps = {
    getVaasthuAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(VaasthuScreen);
