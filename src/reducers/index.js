import taskReducer from './task';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    task : taskReducer,
});

export default rootReducer;