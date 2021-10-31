import {GET_MRKT_INFO} from "../action-types/MarketTypes";

export const dispatchInfo = (dispatch, data) => {
    dispatch({type: GET_MRKT_INFO,payload: {data}})
}