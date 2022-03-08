import {EmployeeListingPresentation} from"./Employee_Listing_Presentation/EmployeeListingPresentation"
import React, { Component, Props, useEffect } from "react";
// import { UserListingPresentation } from "./User_Listing_Presentation/UserListingPresentation";
import { getEmployeeData,deleteEmployeeData} from "./Middleware/EmployeeMiddleware";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const EmployeeListingContainer = (props:any) => {
    

   useEffect(()=>{
      props.getData();
   },[])

  /**  Remove The By Id Middleware Call */
   const removeItem = (id:number) => {
    props.removeId(id);
   }

  return(
    <div>
          <EmployeeListingPresentation initialValues={props.actualEmployeeData} removeItem={removeItem}/>
    </div>
      
  )
}
const mapStateToProps = (state:any) => ({
    actualEmployeeData : state.CreateEmployeeReducer.employeeData,
});

const mapDispatchToProps = (dispatch:any) => ({
    getData: () => dispatch(getEmployeeData()),
    removeId:(id:number)=>dispatch(deleteEmployeeData(id))
});

const UserListingFN = (props:any) => {
    return <EmployeeListingContainer params={useParams()} {...props} />;
  };
const employeeListingContainer =  connect(mapStateToProps,mapDispatchToProps)(UserListingFN);
export { employeeListingContainer as EmployeeListingContainer };