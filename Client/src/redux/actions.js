import axios from "axios";

export const ADD_USERS = 'ADD_USERS'

export function addUsers(input) {
    return function (dispatch) {
      axios.post(`http://localhost:3001/addUsers`, input).then((r) => {
        // dispatch({
        //   type: ADD_USERS,
        // });
      });
    };
  }