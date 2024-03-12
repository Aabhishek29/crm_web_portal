import { IS_AUTHENTICATED, USER_DATA } from "../actions";

const initialState = {
    authenticated: false,
    userData: {}
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case IS_AUTHENTICATED:
            return {
                ...state,
                authenticated: action.payload
            }
        default:
            return state; // Return the current state for unknown action types
    }
}

export default userReducer;
