import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Auth0Provider
        domain="dev-7g47wd-r.us.auth0.com"
        clientId="RvL3ErCb5V2uRxxLC1ecFJeDkFvLMJLJ"
        redirectUri={window.location.origin}
      > */}
        <App />
      {/* </Auth0Provider> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
