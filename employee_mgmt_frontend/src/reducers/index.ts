import { combineReducers } from "redux";
import AddEmployeeReducer from "./AddEmployeeReducer";
import EmployeeReducer from "./EmployeeReducer";
import UpdateEmployeeReducer from "./UpdateEmployeeReducer";

const EmployeeMangeMentReducer = combineReducers({
  AddEmployeeReducer,
  UpdateEmployeeReducer,
  EmployeeReducer,
});
export default EmployeeMangeMentReducer;
