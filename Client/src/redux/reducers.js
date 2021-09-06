import { GET_USERS, LOGIN, FIND_ONE_USER } from "./actions";

const inicialState = {
  users: [],
  state_login: [],
  user: {},
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
    case FIND_ONE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
