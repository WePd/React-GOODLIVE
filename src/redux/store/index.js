/*
 * @Author: WePD
 * @Date: 2021-12-08 16:22:09
 */
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
