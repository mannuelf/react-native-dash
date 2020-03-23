import { GET_CONFIRMED_CASES } from "./actionTypes";
import { CORONA_API } from "../apiConstants";
import Axios from 'axios';

export const getConfirmedCases = () => {
    return dispatch => {
        return Axios.get(CORONA_API)
            .then(result => {
                dispatch({
                    type: GET_CONFIRMED_CASES,
                    payload: result.data
                })
            })
    }
};