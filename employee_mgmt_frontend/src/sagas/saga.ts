import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { EmployeeActionTypes } from "../types/employeeTypes";
import {
  requestEmployeesError,
  requestEmployeesSuccess,
  sendRequest,
  createEmployee,
  deleteEmployee,
} from "../action/employeeAction";
function* handleFetch() {
  try {
    const data = yield select();
    yield put(requestEmployeesSuccess(data));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(requestEmployeesError(err.stack));
    } else {
      yield put(requestEmployeesError("An unknown error occurred."));
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(EmployeeActionTypes.SEND_EMPLOYEE_REQUEST, handleFetch);
}
function* cartSaga() {
  yield all([fork(watchFetchRequest)]);
}
export default cartSaga;
