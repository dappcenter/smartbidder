import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {logger} from "redux-logger";
import { appReducers } from '../utils';
export const store = process.env.NODE_ENV === 'development' ? 
    // dev code
    createStore(
        combineReducers(appReducers),
        applyMiddleware(logger, promise(), thunkMiddleware),
    ) : 
    //for production
    createStore(
        combineReducers(appReducers),
        applyMiddleware(promise(), thunkMiddleware)
    );