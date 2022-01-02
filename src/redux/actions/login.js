import { LOGIN, LOGOUT } from "../constants/index"

export function login(message) {
	return {
		type: LOGIN,
		message,
	}
}

export function logout() {
	return {
		type: LOGOUT,
	}
}
