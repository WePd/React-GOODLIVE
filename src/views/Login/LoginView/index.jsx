import React, { useState } from "react"
import api from "../../../api"
import validatorInput from "../../../utils/validator"
import classNames from "classnames"

import "./style.css"

export default function LoginView(props) {
	const [username, setUserName] = useState("")
	const [password, setUserPassword] = useState("")
	const [error, setError] = useState({})

	function onSubmitHandle(e) {
		e.preventDefault()
		console.log(username, password)
		const { isValid, errors } = validatorInput({ username, password })
		if (!isValid) {
			api.login({ username, password }).then((res) => {
				if (res.data.status === 200) {
					props.loginMessage(res.data)
					setError({})
				}
			})
		} else setError(errors)
	}
	function changeHandle(e) {
		if (e.target.name === "username") {
			setUserName(e.target.value)
		}
		if (e.target.name === "password") {
			setUserPassword(e.target.value)
		}
	}
	return (
		<div id="login-container">
			<form onSubmit={onSubmitHandle}>
				<div className={classNames("input-container phone-container", { "input-container-error": error.username })}>
					<i className="icon-tablet"></i>
					<input type="text" name="username" placeholder="用户名/手机号" value={username} onChange={changeHandle} />
				</div>
				<div className={classNames("password-container input-container", { "input-container-error": error.password })}>
					<i className="icon-key"></i>
					<button>发送验证码</button>
					<input type="password" name="password" placeholder="输入验证码" value={password} onChange={changeHandle} />
				</div>
				<button className="btn-login">登录</button>
			</form>
		</div>
	)
}
