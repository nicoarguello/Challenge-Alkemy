import axios from "axios";

export const GET_USERS = "GET_USERS";
export const LOGIN = "LOGIN";
export const FIND_ONE_USER = "FIND_ONE_USER";

export function addUsers(input) {
  return function () {
    axios.post(`http://localhost:3001/addUsers`, input).then((r) => {});
  };
}

export function findUsers() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/findUsers`).then((r) => {
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
        payload: r,
      });
    });
  };
}

export function findOneUser(input) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/findOneUser?userName=${input}`)
      .then((r) => {
        dispatch({
          type: FIND_ONE_USER,
          payload: r.data,
        });
      });
  };
}
