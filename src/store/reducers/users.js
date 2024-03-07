import { USER_DATA } from "../actions";

const initialState = {
	userData: {}
}

function userReducer(state = initialState, action) {
	switch (action.type) {
		case USER_DATA:
			return {
				...state,
				userData: action.payload
			}
	}
}

export default userReducer;