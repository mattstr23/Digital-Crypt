import { combineReducers } from "redux";
import marketData from "./MarketReducer";
import coinInfo from "./CoinInfoReducer";

const rootReducer = combineReducers({
    marketData,
    coinInfo,
})
export default rootReducer