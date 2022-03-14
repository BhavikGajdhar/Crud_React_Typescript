import { Employee } from "../../Employee";
import { CreateEmployeeActions } from "../Constants/Constants"

/** Listing Employee Data Action  */
export const listEmployeeData = (data:Employee[]) => {
    return {
      type: CreateEmployeeActions.GET_EMPLOYEE_DATA,
      payload: data,
    };
};

/** Delete Employee Data Action  */
export const deleteEmployee = (data:number) => {
    return {
      type: CreateEmployeeActions.DELETE_EMPLOYEE_DATA,
      payload: data,
    };
};

/** Submit Employee Data Action  */
export const submitEmployeeData = (data:Employee) => {
  return {
    type: CreateEmployeeActions.SUBMIT_EMPLOYEE_DATA,
    payload: data,
  };
};

/** Patch Value Of Form Action  */
export const getIdEmployeeData =(data:Employee)=>{
  return{
    type:CreateEmployeeActions.GET_ID_EMPLOYEE_DATA,
    payload : data,
  }
}

/** Updated Value Of Employee List Action  */
export const updateEmployeeData = (data:Employee) =>{
  return{
    type:CreateEmployeeActions.UPDATE_EMPLOYEE_DATA,
    payload : data,
    id:data.id
  }
}