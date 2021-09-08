import { GET_USERS, LOGIN, FIND_ONE_USER, FIND_BUDGET } from "./actions";

const inicialState = {
  users: [],
  token: "",
  user: {},
  budget: [],
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
        token: action.payload,
      };
    case FIND_ONE_USER:
      return {
        ...state,
        user: action.payload,
        users: [],
      };
    case FIND_BUDGET:
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
