import React from "react"
import Item from "./Item"

export default function SearchListView(props) {
	// console.log(props);
	return (
		<div>
			{props.searchData.map((item, id) => {
				return <Item data={item} key={id}></Item>
			})}
		</div>
	)
}
