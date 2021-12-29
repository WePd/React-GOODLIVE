import React from "react"
import "./style.css"
import DefaultImg from "../../../../assets/images/default.png"
import loadImageAsync from "../../../../utils/loadImg"

export default function Item(props) {
	const { data } = props
  const curr
	return (
		<div className="list-item">
			<img src={DefaultImg} alt="" />
			<div className="mask">
				<div className="left">
					<p>{data.title}</p>
					<p>{data.houseType}</p>
				</div>
				<div className="right">
					<div className="btn">{data.rentType}</div>
					<p dangerouslySetInnerHTML={{ __html: data.price + "元/月" }}></p>
				</div>
			</div>
		</div>
	)
}
