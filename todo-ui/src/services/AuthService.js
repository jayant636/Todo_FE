import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth";

export function regsiterApiCall(registerObj) {
  return axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj);
}

export function loginRest(loginObj) {
  return axios.post(AUTH_REST_API_BASE_URL + "/login", loginObj);
}

export function storeToken(token) {
  return localStorage.setItem("token", token);
}

export function getToken() {
  localStorage.getItem("token");
}

export function saveLoggedInUser(email) {
  sessionStorage.setItem("authenticatedUser", email);
}

export function isUserLoggedIn() {
  const email = sessionStorage.getItem("authenticatedUser");
  if (email == null) {
    console.log("false");
    return false;
  } else {
    console.log("true");
    return true;
  }
}

export function getLoggedInUser() {
  const email = sessionStorage.getItem("authenticationUser");
  return email;
}

export function logout() {
  localStorage.clear();
  sessionStorage.clear();
}
