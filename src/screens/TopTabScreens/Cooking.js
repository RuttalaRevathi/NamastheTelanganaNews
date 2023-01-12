/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getCookingAction from '../../redux/actions/getCookingAction';
import CategoryUI from '../../components/CategoryUI';


const CookingScreen = ({
    navigation,
    cookingData,
    cookingLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCookingAction('cooking'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {cookingData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="cooking"
        />
    );
};

type Props = {
    cookingData: Function,
    cookingLoading: Boolean,
};
const mapStateToProps = state => ({
    cookingData: state.cookingReducer?.cookingData,
    cookingLoading: state.cookingReducer?.cookingLoading,
});
const mapDispatchToProps = {
    getCookingAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CookingScreen);
