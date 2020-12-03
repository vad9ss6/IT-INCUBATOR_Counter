import {createStore, combineReducers} from "redux";
import {counterReducer} from "./counter-reducer";

const combineReducer = combineReducers({
    counterState: counterReducer
})

export const store = createStore(combineReducer)