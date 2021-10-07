import { configureStore } from "@reduxjs/toolkit";
import authStore from "./authStore";
import userSlice from "./userSlice";
// import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

const sagaMiddleWare = createSagaMiddleware();
const MainStore = configureStore({
  reducer: {
    auth: authStore,
    user: userSlice,
  },
  middleware: [sagaMiddleWare],
});
sagaMiddleWare.run(mySaga);

export default MainStore;
