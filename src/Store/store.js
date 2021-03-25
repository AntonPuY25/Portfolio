import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form'
import Reducer from "./reducer";

let reducers = combineReducers({
    reducer:Reducer,
    form:formReducer
})
const store = createStore(reducers);
export default store;