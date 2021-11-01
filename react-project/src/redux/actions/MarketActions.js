import {GET_MRKT_INFO} from "../action-types/ActionTypes";

export const dispatchMarketInfo = (dispatch, data) => {
    dispatch({type: GET_MRKT_INFO,payload: {data}})
}