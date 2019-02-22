import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import firebaseReducer from "../Reducers/firebaseReducer";
import inventoryReducer from "../Reducers/inventoryReducer";
import trashReducer from "../Reducers/trashReducer";
import shoppingReducer from "../Reducers/shoppingReducer";
import userReducer from "../Reducers/userReducer";
import thunk from "redux-thunk";


const allReducers = combineReducers({
    firebase: firebaseReducer,
    inventory: inventoryReducer,
    trash: trashReducer,
    shopping: shoppingReducer,
    user: userReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers,
    { user: { username: "", password: "" } },
    composeEnhancers(applyMiddleware(thunk)));

export default store