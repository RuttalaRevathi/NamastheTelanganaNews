/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
// import getMahabubnagarAction from '../../redux/actions/getDistrictsAction';
import CategoryUI from '../../components/CategoryUI';
import { getMahabubnagarAction } from '../../redux/actions/getMahabubnagarAction';


const MahabubnagarScreen = ({
    navigation,
    mahabubnagarData,
    mahabubnagarLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMahabubnagarAction());

    }, []);
    // share function

    return (
        <CategoryUI
        data = {mahabubnagarData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="mahabubnagar"
        />
    );
};

type Props = {
    mahabubnagarData: Function,
    mahabubnagarLoading: Boolean,
};
const mapStateToProps = state => ({
    mahabubnagarData: state.mahabubnagarReducer?.mahabubnagarData,
    mahabubnagarLoading: state.mahabubnagarReducer?.mahabubnagarLoading,
});
const mapDispatchToProps = {
    getMahabubnagarAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MahabubnagarScreen);
