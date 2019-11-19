import {combineReducers} from 'redux';
import baseReducer from './baseReducer'

/**
 * This file is for combining reducers from different components across the whole application.
 */
const appReducer = combineReducers({baseReducer});

export default appReducer;
