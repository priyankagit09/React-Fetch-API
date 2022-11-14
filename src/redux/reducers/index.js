 import {combineReducers} from "redux";

 import { languageReducer } from "./languageReducer";

 export const reducers = combineReducers({
    allLanguages: languageReducer,
 })