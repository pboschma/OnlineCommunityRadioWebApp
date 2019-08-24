import { combineReducers } from "redux";
import radio from './radioReducer';
import nav from './navReducer';

const rootReducers = combineReducers({
    radio,
    nav
});

export default rootReducers;