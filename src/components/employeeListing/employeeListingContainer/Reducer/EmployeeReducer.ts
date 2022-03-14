import { Employee, ReducerProps } from "../../Employee";
import { CreateEmployeeActions } from "../Constants/Constants"

export const CreateEmployeeReducer=(
    state={
        employeeData:[],
        saveEmployeeData:null,
        idByEmployeeData:null
    },action:ReducerProps
)=>{
    switch(action.type){

        /** store the data of EmployeeList */
        case CreateEmployeeActions.GET_EMPLOYEE_DATA:
            let employeeDataCopy = action.payload;
            return { ...state, employeeData: employeeDataCopy };

        /** Remove the data By ID  */    
        case CreateEmployeeActions.DELETE_EMPLOYEE_DATA:
             const removeData = state.employeeData.filter((item:Employee) => item.id !== action.payload);
            return { ...state, employeeData: removeData };

        /** Save The Employee data of List  */    
        case CreateEmployeeActions.SUBMIT_EMPLOYEE_DATA:
            let saveemployeeDataCopy = action.payload;
            return { ...state, saveEmployeeData: saveemployeeDataCopy };

        /** Patch Value Of Form  */    
        case CreateEmployeeActions.GET_ID_EMPLOYEE_DATA:
            return { ...state, idByEmployeeData: action.payload };

        /** Update Data of Employee List */    
        case CreateEmployeeActions.UPDATE_EMPLOYEE_DATA:
            let updateEmployeeData =state.employeeData.map((item:Employee) => item.id == action.id ? action.payload : item);
            return { ...state, employeeData: updateEmployeeData };

        default:
           return state;
    }
};