import { ActionTypes } from "../ActionTypes"



const initialState= {
    products: [],
    language: ""
    
}

export const languageReducer =(state=initialState, action) => {
     switch(action.type) {
        case ActionTypes.SELECTED_LANGUAGES:
            return {...state, products: action.payload}
     
        case ActionTypes.SELECT_LANGUAGE:
            return {...state, language: action.payload}
            default:
        return state;
     }
}