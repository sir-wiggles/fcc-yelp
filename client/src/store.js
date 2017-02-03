import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import restaurants from './reducers';
import { combineForms } from 'react-redux-form';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

let middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({ }))
}

let store = createStore(combineReducers({
    restaurants,
    forms: combineForms({
        search: {location: "Mountain View"},
    })
}), applyMiddleware(...middleware));

export default store;
