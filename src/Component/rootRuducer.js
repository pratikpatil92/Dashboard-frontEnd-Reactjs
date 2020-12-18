import {combineReducers} from 'redux';
import authReducer from './Redux/auth/AuthReducer';
import categoryReducer from './Redux/category/CategoryReducer';

export default combineReducers({
    auth:authReducer,
    categories:categoryReducer,
});