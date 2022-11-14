// import React from 'react'
// import axios from 'axios';
import { ActionTypes } from '../ActionTypes';

// export const fetchLanguage = () => {
//     return async (dispatch) => {
//         const response = await axios.get("https://apis.ccbp.in/popular-repos");
//         dispatch({type: ActionTypes.FETCH_LANGUAGES,
//         payload: response })
//     }
// }
 

export const setLanguages = (languages) => {
     return {
        type: ActionTypes.SELECTED_LANGUAGES,
        payload: languages
     }
}

export const setLanguage =(language) => {
    return {
        type: ActionTypes.SELECT_LANGUAGE,
        payload: language
    }
}
