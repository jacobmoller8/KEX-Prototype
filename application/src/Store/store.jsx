import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import firebaseReducer from "../Reducers/firebaseReducer";
import userReducer from "../Reducers/userReducer";
import mainScreenModeReducer from "../Reducers/mainScreenModeReducer";
import thunk from "redux-thunk";


const allReducers = combineReducers({
    firebase: firebaseReducer,
    user: userReducer,
    mainScreen: mainScreenModeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers,
    { user: { username: "", password: "" }, mainScreen:{mainScreenMode:'inventory'} },
    composeEnhancers(applyMiddleware(thunk)));

export default store