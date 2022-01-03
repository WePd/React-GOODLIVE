import React from "react"
import FavoriteView from "../FavoriteView"
import { useSelector } from "react-redux"

export default function Favorite(props) {
	const login = useSelector((state) => state.login)
	const favorite = useSelector((state) => state.FavHanle)
	return (
		<div>
			<FavoriteView user={login.user} favorites={favorite} id={props.id} />
		</div>
	)
}
