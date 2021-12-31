import React, { useState } from "react"
import "./style.css"
import DefaultImg from "../../../../assets/images/default.png"
import { loadImageAsync } from "../../../../utils/loadImg"
import { Link } from "react-router-dom"

export default function Item(props) {
	const [renderImg, setRenderImg] = useState(DefaultImg)
	const { data } = props
	loadImageAsync(data.img)
		.then((res) => setRenderImg(res.url))
		.catch((err) => console.log(err.message))
	return (
		<div className="list-item">
			<Link to={`/details/${data.id}`}>
				<img src={renderImg} alt="" />
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
			</Link>
		</div>
	)
}
