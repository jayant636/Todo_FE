import axios from "axios";
import { getToken } from "./AuthService";

// Backend url where you need to hit the API to fetch the data
const BASE_REST_API_URL = "http://localhost:8080/api/todos";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Make sure to export all the functions

export function getAllTodos() {
  return axios.get(BASE_REST_API_URL);
}

export function addTodo(todo) {
  return axios.post(BASE_REST_API_URL, todo);
}

export function getTodoById(id) {
  return axios.get(BASE_REST_API_URL + "/" + id);
}

export function updateTodoo(id, todo) {
  return axios.put(BASE_REST_API_URL + "/update" + "/" + id, todo);
}

export function deleteTodo(id) {
  return axios.delete(BASE_REST_API_URL + "/" + id);
}

export function completeTodo(id) {
  return axios.patch(BASE_REST_API_URL + "/" + id);
}
