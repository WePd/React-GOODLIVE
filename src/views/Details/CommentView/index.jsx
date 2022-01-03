import React from "react"
import Item from "./Item"

import "./style.css"

export default function CommentView(props) {
	let data = props.commentList
	return (
		<div>
			{data.map((item, index) => {
				return <Item data={item} key={index} />
			})}
		</div>
	)
}
