import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form'
import Reducer from "./reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({
    reducer:Reducer,
    form:formReducer
})
const store = createStore(reducers,applyMiddleware(thunk));
export type TypeStore = ReturnType<typeof reducers>

export default store;