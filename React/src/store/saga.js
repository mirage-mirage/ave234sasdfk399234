/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { takeLatest, takeEvery, put, all } from "redux-saga/effects";

function* putApiCall(action) {
  yield put({
    type: "UserSlice/updateDetails",
    payload: action.payload,
  });
}

function* logoutUser(action) {
  yield put({ type: "auth/logout" });
  yield put({ type: "UserSlice/clearData" });
}

function* logoutSaga() {
  yield takeEvery("logout", logoutUser);
}
function* sendData() {
  yield takeLatest("sendUserData", putApiCall);
}

export default function* rootSaga() {
  yield all([logoutSaga(), sendData()]);
}
