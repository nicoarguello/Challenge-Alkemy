import { GET_USERS } from "./actions"

const inicialState = {
    users : []
}

function rootReducer(state= inicialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;