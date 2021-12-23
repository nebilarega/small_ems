export interface Employee {
  _id: string;
  name: string;
  age: number;
  sex: string;
  salary: number;
  isCurrent: boolean;
  startDate: Date;
  leaveDate: Date;
}

export enum EmployeeActionTypes {
  SEND_EMPLOYEE_REQUEST = "SEND_EMPLOYEE_REQUEST",
  LOAD_EMPLOYEES_SUCCESS = "LOAD_EMPLOYEES_SUCCESS",
  CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS",
  DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS",
  REQUEST_SERVER_ERROR = "REQUEST_SERVER_ERROR",
}

export interface EmployeeState {
  readonly data: Employee[];
  readonly loading: boolean;
  readonly error?: string;
}
