import { combineReducers } from "redux";
import marketData from "./MarketReducer";
import portfolioData from "./PortfolioReducer";

const rootReducer = combineReducers({
    marketData,
    portfolioData,
})
export default rootReducer