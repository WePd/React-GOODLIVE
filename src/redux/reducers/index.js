/*
 * @Author: WePD
 * @Date: 2021-12-08 16:43:27
 */
import { combineReducers } from "redux"
import city from "./citys"
import search from "./searchDate"
import login from "./login"
import FavHanle from "./favorite"

const rootReducer = combineReducers({
	city,
	search,
	login,
	FavHanle,
})

export default rootReducer
