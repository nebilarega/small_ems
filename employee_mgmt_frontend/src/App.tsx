// import "./App.css";
import { useState, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  fetchEmployees,
  createEmployee,
  deleteEmployee,
} from "./action/employeeAction";

import { Dashboard } from "./Dashboard";

const App = () => {
  const EmployeeState = useSelector(
    (state: RootStateOrAny) => state.EmployeeReducer.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  const employee = {
    name: "Nebil Arega",
    age: 32,
    sex: "male",
    salary: 3234,
    isCurrent: true,
    startDate: new Date(),
    leaveData: new Date(),
    createdAt: new Date(),
    completionDate: new Date(),
  };

  return <Dashboard Employees={EmployeeState} />;
};

export default App;
