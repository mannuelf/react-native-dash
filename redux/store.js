import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialReducer from "./reducers/initialReducer";
import logger from 'redux-logger';

export const initStore = (initialState = {}) => {
    return createStore(
        initialReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, logger))
    )
};