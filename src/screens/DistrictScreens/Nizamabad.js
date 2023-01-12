/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getNizamabadAction } from '../../redux/actions/getNizamabadAction';


const NizamabadScreen = ({
    navigation,
    nizamabadData,
    nizamabadLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNizamabadAction());

    }, []);
    // share function

    return (
        <CategoryUI
        data = {nizamabadData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="nizamabad"
        />
    );
};

type Props = {
    nizamabadData: Function,
    nizamabadLoading: Boolean,
};
const mapStateToProps = state => ({
    nizamabadData: state.nizamabadReducer?.nizamabadData,
    nizamabadLoading: state.nizamabadReducer?.nizamabadLoading,
});
const mapDispatchToProps = {
    getNizamabadAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NizamabadScreen);
