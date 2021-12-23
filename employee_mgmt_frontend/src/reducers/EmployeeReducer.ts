import { Reducer } from "redux";
import { EmployeeActionTypes, EmployeeState } from "../types/employeeTypes";

export const initialState: EmployeeState = {
  data: [],
  loading: false,
  error: undefined,
};
const EmployeeReducer: Reducer<EmployeeState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case EmployeeActionTypes.SEND_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data.employees,
      };
    case EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter(
          (employee) => employee._id !== action.employeeIds
        ),
      };
    case EmployeeActionTypes.REQUEST_SERVER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default EmployeeReducer;
