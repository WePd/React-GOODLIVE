import React from "react"
import LoginView from "./LoginView"
import { useDispatch } from "react-redux"
import * as loginAction from "../../redux/actions/login"

export default function Login() {
	const dispatch = useDispatch()
	function loginMessage(user) {
		// console.log(user)
		dispatch(loginAction.login(user))
		localStorage.setItem("user", JSON.stringify(user))
		window.history.back()
	}
	return (
		<div>
			<LoginView loginMessage={loginMessage} />
		</div>
	)
}
