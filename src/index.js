import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FriendStatus from "./component/friend-status";
import FriendList from "./component/friend-list";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { increment, decrement } from "./redux/slice/counterSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <FriendStatus />
      <FriendList />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
