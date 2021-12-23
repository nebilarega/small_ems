/** addEmployee types */
export interface Employee {
  name: string;
  age: number;
  sex: string;
  salary: number;
  isCurrent: boolean;
  startDate: Date;
  leaveData: Date;
  createdAt: Date;
  completionDate: Date;
}

export interface AddEmployee {
  isOpen: boolean;
}
export enum AddEmployeeTypes {
  TOGGLE_DASHBOARD = "TOGGLE_DASHBOARD",
  SUBMIT_FORM = "SUBMIT_FORM",
  SET_FORM_DATA = "SET_FORM_DATA",
}
export interface AddEmployeeState {
  readonly value: AddEmployee;
  readonly data: Employee;
}
