/*
 * @Author: WePD
 * @Date: 2021-12-08 16:43:27
 */
import { combineReducers } from "redux"
import city from "./citys"
import search from "./searchDate"

const rootReducer = combineReducers({
	city,
	search,
})

export default rootReducer
