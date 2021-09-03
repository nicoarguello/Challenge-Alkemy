import axios from "axios";

export const ADD_USERS = 'ADD_USERS'
export const GET_USERS = 'GET_USERS'

export function addUsers(input) {
    return function () {
      axios.post(`http://localhost:3001/addUsers`, input).then((r) => {
        });
    };
  }

  export function findUsers(input) {
    return function (dispatch) {
      axios.get(`http://localhost:3001/findUsers`, input).then((r) => {
        dispatch({
            type: GET_USERS,
            payload: r.data
        })
    });
    };
  }  