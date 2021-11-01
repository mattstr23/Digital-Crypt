import { ADD_CRYPT, DELETE_CRYPT } from "../action-types/ActionTypes";

const initialState = []

const portfolioData = (state=initialState, action) => {
    switch(action.type){
        case ADD_CRYPT:
            return[...state, action.payload]
        case DELETE_CRYPT:
            let newstate = state.filter((portCrypt) => portCrypt.id !== action.payload )
            return newstate
        default:
            return state
    }
}
export default portfolioData;