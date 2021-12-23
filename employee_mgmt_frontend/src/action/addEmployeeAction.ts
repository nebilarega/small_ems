import { AddEmployeeTypes } from "../types/addEmployeeType";
export const toggleDashboard = () => ({
  type: AddEmployeeTypes.TOGGLE_DASHBOARD,
});

// export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   return (dispatch) => {
//     // event.preventDefault();
//     console.log(
//       "For the love of god pleaase work---------------------------------------------------------------"
//     );
//     const data = new FormData(event.target as HTMLFormElement);
//     const employee = {
//       name: data.get("name"),
//       age: data.get("age"),
//       sex: data.get("sex"),
//       salary: data.get("salary"),
//       isCurrent: data.get("isCurrent"),
//       startDate: data.get("startDatte"),
//       leaveDate: data.get("leaveDate"),
//     };
//     // window.location.reload();
//     dispatch({
//       type: AddEmployeeTypes.SUBMIT_FORM,
//       payload: employee,
//     });
//   };
// };
