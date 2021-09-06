import { GET_USERS, LOGIN } from "./actions";

const inicialState = {
  users: [],
  state_login: {},
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        state_login: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
