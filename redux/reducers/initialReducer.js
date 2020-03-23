import { combineReducers } from 'redux';
import { confirmedCases } from './confirmedCases';

export default combineReducers({
    confirmed_cases: confirmedCases
});