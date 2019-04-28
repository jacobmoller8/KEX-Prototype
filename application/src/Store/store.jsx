import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import firebaseReducer from "../Reducers/firebaseReducer";
import feedbackReducer from "../Reducers/feedbackReducer";
import userReducer from "../Reducers/userReducer";
import mainScreenModeReducer from "../Reducers/mainScreenModeReducer";
import currentItemReducer from "../Reducers/currentItemReducer";
import apiReducer from '../Reducers/apiReducer';
import sortListReducer from '../Reducers/sortListReducer'

import thunk from "redux-thunk";


const persistConfig = {
    key: "root",
    storage: storage,
    keyPrefix: ''
}


const allReducers = combineReducers({
    firebase: firebaseReducer,
    user: userReducer,
    mainScreen: mainScreenModeReducer,
    currentItem: currentItemReducer,
		apiInfo: apiReducer,
		feedback: feedbackReducer,
		listOrder: sortListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = createStore(persistedReducer,
    { user: { username: "", password: "" }, mainScreen: { mainScreenMode: 'inventory' } },
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store)