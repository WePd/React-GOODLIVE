import React, { useState } from "react"
import api from "../../../api"
import "./style.css"

export default function LoginView(props) {
	const [username, setUserName] = useState("")
	const [password, setUserPassword] = useState("")

	function onSubmitHandle(e) {
		e.preventDefault()
		console.log(username, password)
		api.login({ username, password }).then((res) => {
			console.log(res)
		})
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
				<div className="input-container phone-container">
					<i className="icon-tablet"></i>
					<input type="text" name="username" placeholder="用户名/手机号" value={username} onChange={changeHandle} />
				</div>
				<div className="input-container password-container">
					<i className="icon-key"></i>
					<button>发送验证码</button>
					<input type="password" name="password" placeholder="输入验证码" value={password} onChange={changeHandle} />
				</div>
				<button className="btn-login">登录</button>
			</form>
		</div>
	)
}
