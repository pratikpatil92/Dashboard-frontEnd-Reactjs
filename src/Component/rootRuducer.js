import {combineReducers} from 'redux';
import authReducer from './Redux/auth/AuthReducer';
import categoryReducer from './Redux/category/CategoryReducer';
import postReducer from './Redux/post/PostReducer'

export default combineReducers({
    auth:authReducer,
    categories:categoryReducer,
    post:postReducer,
});