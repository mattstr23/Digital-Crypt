import { ADD_CRYPT, DELETE_CRYPT } from "../action-types/ActionTypes";

export const addCrypt = (dispatch, data) => {
    dispatch({type: ADD_CRYPT,payload: data})

}
export const deleteCrypt = (dispatch, data) => {
    dispatch({type: DELETE_CRYPT,payload: data})
}