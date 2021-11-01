import { combineReducers } from "redux";
import marketData from "./MarketReducer";

const rootReducer = combineReducers({
    marketData,
})
export default rootReducer