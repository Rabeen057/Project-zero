import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "../../saga/saga";
import postReducer from "../slice/postSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(helloSaga);

export default store;
