import { Reducer } from "redux";
import { UpdateEmployeeState } from "../types/updateEmployeeType";
import UpdateEmployee from "../UpdateEmployee";

const initialState: UpdateEmployeeState = {
  value: {
    isOpen: false,
  },
  data: {
    name: "",
    age: 18,
    sex: "male",
    salary: 0,
    isCurrent: false,
    startDate: new Date(),
    leaveData: new Date(),
    createdAt: new Date(),
    completionDate: new Date(),
  },
};

const UpdateEmployeeReducer: Reducer<UpdateEmployeeState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "TOGGLE_DASHBOARD":
      return {
        ...state,
        value: {
          ...state.value,
          isOpen: !state.value.isOpen,
        },
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default UpdateEmployeeReducer;
