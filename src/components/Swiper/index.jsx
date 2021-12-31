import React, { useState } from "react"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import Pagination from "./Pagination/index"

import "./index.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const Swiper = (props) => {
	const [index, setIndex] = useState(0)

	function handleChangeIndex(index) {
		setIndex(index)
	}

	return (
		<div className="swiper">
			<AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
				{props.banners.map((ele, index) => {
					return (
						<div className="swiper-view" key={index}>
							{/* 图片需要以对象的形式使用 */}
							<img src={ele} alt="" />
						</div>
					)
				})}
			</AutoPlaySwipeableViews>
			<Pagination index={index} bannerSum={props.banners.length} />
		</div>
	)
}

export default Swiper
