/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getEditPageAction from '../../redux/actions/getEditPageAction';
import CategoryUI from '../../components/CategoryUI';


const EditPageScreen = ({
    navigation,
    editPageData,
    ediPageLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEditPageAction('editpage'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {editPageData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="editpage"
        />
    );
};

type Props = {
    editPageData: Function,
    ediPageLoading: Boolean,
};
const mapStateToProps = state => ({
    editPageData: state.editPageReducer?.editPageData,
    ediPageLoading: state.editPageReducer?.ediPageLoading,
});
const mapDispatchToProps = {
    getEditPageAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPageScreen);
