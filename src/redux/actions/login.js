import { LOGIN, LOGOUT } from "../constants/index"

export function login(user) {
	return {
		type: LOGIN,
		user,
	}
}

export function logout() {
	return {
		type: LOGOUT,
	}
}
