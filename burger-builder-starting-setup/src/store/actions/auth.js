import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      retunSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBeUNOrAv94VUUGRYOvrknoHQfgQNxldUg";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeUNOrAv94VUUGRYOvrknoHQfgQNxldUg";
    }
    console.log(!isSignup);
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        // expiresIn is not comig in teh respunce, the I harcoded it.
        // dispatch(checkAuthTimeout(response.data.expiresIn));
        dispatch(checkAuthTimeout("3600"));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};
