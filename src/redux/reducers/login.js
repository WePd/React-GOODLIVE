import { LOGIN, LOGOUT } from "../constants"

const defaultState = {
	user: {
		token: "",
		nick: "",
	},
}

export default function login(state = defaultState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				user: action.user,
			}
		case LOGOUT:
			return {
				user: {
					token: "",
					nick: "",
				},
			}
		default:
			return state
	}
}
