import employeeApi from "../api/employeeApi";
import { EmployeeActionTypes } from "../types/employeeTypes";

interface EmployeeInterface {
  name: string;
  age: number;
  sex: string;
  salary: number;
  isCurrent: boolean;
  startDate: Date;
  leaveDate: Date;
  createdAt: Date;
  completionDate: Date;
}

export const requestEmployeesError = (error: string) => ({
  type: EmployeeActionTypes.REQUEST_SERVER_ERROR,
  error: error,
  receivedAt: Date.now(),
});
export const sendRequest = () => ({
  type: EmployeeActionTypes.SEND_EMPLOYEE_REQUEST,
});

export const requestEmployeesSuccess = (data: {
  employees: any;
  totalCount: any;
}) => ({
  type: EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS,
  data,
  receivedAt: Date.now(),
});
export const createEmployeeSuccess = (employee: EmployeeInterface) => {
  return {
    type: EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS,
    employee,
    receivedAt: Date.now(),
  };
};
export const deleteEmployeeSuccess = (employeeIds: string | string[]) => {
  return {
    type: EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS,
    employeeIds,
    receivedAt: Date.now(),
  };
};

const convertedEmployee = (employee: EmployeeInterface) => {
  employee.createdAt = new Date(employee.createdAt);
  if (employee.completionDate) {
    employee.completionDate = new Date(employee.completionDate);
  }
  return employee;
};
export const fetchEmployees =
  () =>
  async (
    dispatch: (arg0: {
      type: EmployeeActionTypes;
      data?: any;
      receivedAt?: number;
      error?: any;
    }) => void
  ) => {
    // const query = Object.assign({}, queryString.parse(location.search));

    // const search = Object.keys(query)
    //   .map((k) => `${k}=${query[k]}`)
    //   .join("&");

    dispatch(sendRequest());
    try {
      const response = await employeeApi.getAllEmployees();
      if (!response.ok)
        return response.json().then((error) => Promise.reject(error));
      response.json().then((data) => {
        const employees = data.records;
        employees.forEach(
          (employee: {
            createdAt: string | number | Date;
            completionDate: string | number | Date;
          }) => {
            employee.createdAt = new Date(employee.createdAt);
            if (employee.completionDate) {
              employee.completionDate = new Date(employee.completionDate);
            }
          }
        );

        dispatch(
          requestEmployeesSuccess({
            employees,
            totalCount: data.metadata.totalCount,
          })
        );
      });
    } catch (err) {
      const errorMsg = `Error in fetching data from server: ${
        (err as Error).message
      }`;
      console.log("errorMsg", errorMsg);
      dispatch(requestEmployeesError(errorMsg));
    }
  };

export const createEmployee = (employee: EmployeeInterface) => {
  return (dispatch) => {
    dispatch(sendRequest());

    employeeApi
      .createEmployee(employee)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            const errorMsg = `Failed to add employee: ${error.message}`;
            dispatch(requestEmployeesError(errorMsg));
          });
        }
        response.json().then((updatedEmployee) => {
          updatedEmployee = convertedEmployee(updatedEmployee);
          dispatch(createEmployeeSuccess(updatedEmployee));
        });
      })
      .catch((error) => {
        const errorMsg = `Error in sending data to server: ${error.message}`;
        dispatch(requestEmployeesError(errorMsg));
      });
  };
};
export const deleteEmployee = (employee: string) => {
  return (dispatch) => {
    console.log("employee", employee);
    // dispatch(sendRequest());
    employeeApi
      .deleteEmployee(employee)
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          const errorMsg = `Failed to delete employee`;
          dispatch(requestEmployeesError(errorMsg));
        }
        if (response.ok) {
          console.log("response", response);
          dispatch(deleteEmployeeSuccess(employee));
        }
      })
      .catch((error) => {
        const errorMsg = `Error in sending data to server: ${error.message}`;
        // dispatch(requestEmployeesError(errorMsg));
      });
  };
};
export const deleteBulkEmployee = (employeeIds: string[]) => {
  return (dispatch) => {
    dispatch(sendRequest());
    employeeApi
      .deleteBulkEmployee(employeeIds)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            const errorMsg = `Failed to delete employee`;
            dispatch(requestEmployeesError(errorMsg));
          });
        }
        return dispatch(deleteEmployeeSuccess(employeeIds));
      })
      .catch((error) => {
        const errorMsg = `Error in sending data to server: ${error.message}`;
        dispatch(requestEmployeesError(errorMsg));
      });
  };
};
export const updateEmployee = (
  employeeId: string,
  employee: EmployeeInterface
) => {
  return (dispatch) => {
    dispatch(sendRequest());
    employeeApi
      .updateEmployee(employeeId, employee)
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          const errorMsg = `Failed to update employee`;
          dispatch(requestEmployeesError(errorMsg));
        }
        response.json().then((updatedEmployee) => {
          updatedEmployee = convertedEmployee(updatedEmployee);
          dispatch(createEmployeeSuccess(updatedEmployee));
        });
      })
      .catch((error) => {
        const errorMsg = `Error in sending data to server: ${error.message}`;
        dispatch(requestEmployeesError(errorMsg));
      });
  };
};
