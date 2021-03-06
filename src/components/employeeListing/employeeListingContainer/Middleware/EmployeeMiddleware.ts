import axios from "axios";
import { Employee } from "../../Employee";
import {listEmployeeData,deleteEmployee, submitEmployeeData, getIdEmployeeData, updateEmployeeData} from "../Actions/CreateEmployeeAction";

const url = "http://localhost:4500/employee";

/** Get All the Data of Employee Call*/
export const getEmployeeData = () => {
    return function(dispatch:Function){
      axios.get(url).then((response)=>{
        const customers =  response ? response.data : [];
         dispatch(listEmployeeData(customers));
      }).catch((error)=>{
        
      });
    } 
  };

  /** Delete Data By ID Call*/
  export const deleteEmployeeData = (id:number) => {
    return function(dispatch:Function){
       axios.delete(url + "/" + id).then((response)=>{
        dispatch(deleteEmployee(id));
      }).catch((error)=>{
        
      });
    } 
  };

  /** Submit the Data Call */
  export const postEmployeeData =  (data:Employee,navigate:Function) => {
    return function(dispatch:Function){
      axios.post(url,data ).then((response)=>{
        const customers =  response ? response.data : [];
         dispatch(submitEmployeeData(customers));
         navigate("/EmployeeList");
      }).catch((error)=>{
        
      });
    } 
  };
   
  /** PatchValue Call  */
  export const getEmployeeDataById = (id:number) => {
    return function  (dispatch:Function)  { 
       axios.get(url + "/" + id).then((response) => {
          const customers = response ? response.data : [];
          dispatch(getIdEmployeeData(customers));
      }).catch((error)=>{
        
      });
    }
  };
  
  /** Updated Data Call */
  export const putEmployeeData =  (id:number, data:Employee, navigate:Function) => {
    return function(dispatch:Function){
      axios.put(url + "/" + id, data)
      .then((response)=>{
        const customers = response ? response.data : [];
        dispatch(updateEmployeeData(customers));
        navigate("/EmployeeList");
      }).catch((error)=>{
        
      });    
    } 
  };
  