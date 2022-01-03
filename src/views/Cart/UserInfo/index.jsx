import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import "./style.css"

function UserInfo(props) {
	const city = useSelector((state) => state.city)
	const user = useSelector((state) => state.login.user)

	useEffect(() => {
		if (!user.token) {
			props.history.push("/login")
		}
	})
	return (
		<div className="userinfo-container">
			<p>
				<i className="icon-user"></i>
				<span>{user.nick}</span>
			</p>
			<p>
				<i className="icon-map-marker"></i>
				<span>{city.cityName}</span>
			</p>
		</div>
	)
}

export default withRouter(UserInfo)
