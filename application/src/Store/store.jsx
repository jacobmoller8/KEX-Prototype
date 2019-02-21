import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import firebaseReducer from "../Reducers/firebaseReducer";
import thunk from "redux-thunk";


const allReducers = combineReducers({
    firebase: firebaseReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

export default store