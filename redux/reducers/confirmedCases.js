import { GET_CONFIRMED_CASES } from "../actions/actionTypes";

const initState = {
    confirmedCases: {}
};

export const confirmedCases = (state = initState, action) => {
    switch (action.type) {
        case GET_CONFIRMED_CASES:
            return {
                ...state,
                confirmedCases: action.payload
            };
        default:
           return state;
    }
};
