import { GET_MRKT_INFO } from "../action-types/MarketTypes"

const initialState = {}

const marketData = (state=initialState, action) => {
    switch(action.type){
        case GET_MRKT_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default marketData