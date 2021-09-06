import axios from "axios";

export const GET_USERS = "GET_USERS";
export const LOGIN = "LOGIN"

export function addUsers(input) {
  return function () {
    axios.post(`http://localhost:3001/addUsers`, input).then((r) => {});
  };
}

export function findUsers(input) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/findUsers`, input).then((r) => {
      dispatch({
        type: GET_USERS,
        payload: r.data,
      });
    });
  };
}

export function addBudget(input) {
  return function () {
    axios.post(`http://localhost:3001/addBudget`, input).then((r) => {});
  };
}

export function login(input) {
  return function (dispatch) {
    axios.post(`http://localhost:3001/login`, input).then((r) => {
      dispatch({
        type: LOGIN,
        payload: r.request,
      });
    });
  };
}
