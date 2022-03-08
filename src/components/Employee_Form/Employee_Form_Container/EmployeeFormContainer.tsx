import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { EmployeeFormPresentation } from "./Employee_Form_Presentation/EmployeeFormPresentation";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  getEmployeeDataById,
  postEmployeeData,
  putEmployeeData,
} from "../../Employee_Listing/Employee_Listing_Container/Middleware/EmployeeMiddleware";

const EmployeeFormContainer = (props: any) => {

  let { id } = props.params;

  useEffect(() => {
    if (id) {
      props.getSampleData(id);
    }
  }, []);

  /** Add The Employee Data Middleware Call */
  const saveValue = (value: any) => {
    props.addSampleData(value, props.navigate);
  };

  /** Updated The Employee Data Middleware  */
  const updateValue = (id: number, value: any) => {
    props.putSampleData(id, value, props.navigate);
  };

  /** Go navigation back Form Current Page  */
  const Navigate = () => {
    props.getSampleData();
    props.navigate("/EmployeeList");
  };

  return (
    <div>
      <EmployeeFormPresentation
        initialValues={props.employeeDataById}
        save={saveValue}
        update={updateValue}
        navigate={Navigate}
      />
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  employeeDataById: state.CreateEmployeeReducer.idByEmployeeData,
});

const mapDispatchToProps = (dispatch: any) => ({
  getSampleData: (id: number) => dispatch(getEmployeeDataById(id)),

  putSampleData: (id: number, value: any, navigate: any) =>
    dispatch(putEmployeeData(id, value, navigate)),

  addSampleData: (value: any, navigate: any) =>
    dispatch(postEmployeeData(value, navigate)),
});

const EmployeeFormlFN = (props: any) => {
  return <EmployeeFormContainer params={useParams()} {...props} />;
};
const employeeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeFormlFN);
export { employeeFormContainer as EmployeeFormContainer };
