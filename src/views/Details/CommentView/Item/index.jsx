import React from "react"
import "./style.css"
export default function Item(props) {
	const data = props.data

	return (
		<div className="comment-item">
			<h3>
				<i className="icon-user"></i>
				item标题
			</h3>
			<p>commit</p>
		</div>
	)
}
