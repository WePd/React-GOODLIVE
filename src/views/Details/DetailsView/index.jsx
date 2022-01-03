import React from "react"
import Swipre from "../../../components/Swiper"
import DetailsHeader from "../../../components/CityHeader"
import Tabs from "../../../components/Tabs"

import "./style.css"

import Comment from "../Comment"
import Favorite from "../Favorite"

export default function DetailsView(props) {
	let data = props.data
	// console.log(data)
	return (
		<div>
			<DetailsHeader title={"详情页"} />
			<div>
				<Swipre banners={data.imgs} />
				<Tabs>
					<div label="详情">
						<div className="detail-info">
							<h3>{data.title}</h3>
							<div className="box">
								<ul>
									<li>
										<span>{data.price} /月</span>
										<p>租金</p>
									</li>
									<li>
										<span>{data.info.type}</span>
										<p>房屋类型</p>
									</li>
									<li>
										<span>{data.houseType}</span>
										<p>面积</p>
									</li>
								</ul>
							</div>
							<div className="info">
								<div className="info-list">
									<p>类型：{data.info.type}</p>
									<p>朝向：{data.info.orientation}</p>
								</div>
								<div className="info-list">
									<p>楼层：{data.info.level}</p>
									<p>装修：{data.info.style}</p>
								</div>
								<div className="info-list">
									<p>年代：{data.info.years}</p>
								</div>
							</div>
						</div>
					</div>
					<div label="评价">
						<div>
							<Comment id={props.id} />
						</div>
					</div>
				</Tabs>
			</div>
			<Favorite id={props.id} />
		</div>
	)
}
