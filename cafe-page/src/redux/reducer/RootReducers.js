import {combineReducers} from 'redux';
import {loginModal} from 'redux/reducer/LoginModalReducer.js';
import {loginDiv} from 'redux/reducer/LoginDivReducer.js';

export default combineReducers({
    loginModal,
    loginDiv
});