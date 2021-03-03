import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.interceptors.request.use(
  (requestConfig) => {
    console.log(requestConfig);
    // Edit requestConfig
    return requestConfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject.error;
  }
);

axios.interceptors.response.use(
  (responseConfig) => {
    console.log(responseConfig);
    // Edit responseConfig
    return responseConfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject.error;
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
