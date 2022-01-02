import React, { useState } from "react"
import { Button } from "antd"
import "./style.css"

export default function FavoriteView() {
	const [sizeBtn, setSizeBtn] = useState({
		size: "large",
	})
	return (
		<div className="fav-btn">
			<Button type="primary" size={sizeBtn.size}>
				收藏
			</Button>
			<Button type="primary" size={sizeBtn.size}>
				购买
			</Button>
		</div>
	)
}
