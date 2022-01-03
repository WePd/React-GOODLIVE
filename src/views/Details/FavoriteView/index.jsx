import React, { useState } from "react"
import { Button } from "antd"
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"
import * as favoritesAction from "../../../redux/actions/favorite"

import "./style.css"

function FavoriteView(props) {
	// console.log(props.user)
	// console.log(props.id)
	const [sizeBtn, setSizeBtn] = useState({
		size: "large",
	})
	const [isCllect, setIsCllect] = useState(true)
	const dispatch = useDispatch()
	function favoriteHandle() {
		if (props.user.token) {
			//允许收藏
			//判断是否已经收藏，若没有则收藏，若已经收藏则取消收藏
			//已经收藏的
			const favorites = props.favorites
			//当前的id props.id
			let id = props.id
			if (favorites.some((item) => item === id)) {
				//true说明已经收藏
				setIsCllect(true)
				dispatch(favoritesAction.calcelFavorite(id))
			} else {
				//false说明还没有收藏
				setIsCllect(false)
				dispatch(favoritesAction.setFavorite(id))
			}
		} else {
			props.history.push("/login")
		}
	}
	return (
		<div className="fav-btn">
			{!isCllect ? (
				<Button type="primary" size={sizeBtn.size} onClick={favoriteHandle}>
					已收藏
				</Button>
			) : (
				<Button type="primary" size={sizeBtn.size} onClick={favoriteHandle}>
					收藏
				</Button>
			)}
			<Button type="primary" size={sizeBtn.size}>
				购买
			</Button>
		</div>
	)
}

export default withRouter(FavoriteView)
