import { useEffect } from "react";
import { EmployeeFormPresentation } from "./employeeFormPresentation/EmployeeFormPresentation";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getEmployeeDataById,
  postEmployeeData,
  putEmployeeData,
} from "../../Employee_Listing/employeeListingContainer/Middleware/EmployeeMiddleware";
import { Employee, Props } from "../../Employee_Listing/Employee";


const EmployeeFormContainer = (props: Props) => {

  let { id } = props.params;

  useEffect(() => {
    if (id) {
      props.getSampleData(id);
    }
  }, []);

  /** Add The Employee Data Middleware Call */
  const saveValue = (value: Employee) => {
    props.addSampleData(value, props.navigate);
  };

  /** Updated The Employee Data Middleware  */
  const updateValue = (id: number, value: Employee) => {
    props.putSampleData(id, value, props.navigate);
  };

  /** Go navigation back Form Current Page  */
  const navigate = () => {
    props.navigate("/EmployeeList");
  };

  return (
    <div>
      <EmployeeFormPresentation
        initialValues={props.employeeDataById}
        save={saveValue}
        update={updateValue}
        navigate={navigate}
      />
    </div>
  );
};
const mapStateToProps = (state: Props) => ({
  employeeDataById: state.CreateEmployeeReducer.idByEmployeeData,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getSampleData: (id: number) => dispatch(getEmployeeDataById(id)),

  putSampleData: (id: number, value: Employee, navigate: Function) =>
    dispatch(putEmployeeData(id, value, navigate)),

  addSampleData: (value: Employee, navigate: Function) =>
    dispatch(postEmployeeData(value, navigate)),
});

const EmployeeFormFN = (props: any) => {
  return <EmployeeFormContainer params={useParams()} {...props} />;
};
const employeeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeFormFN);
export { employeeFormContainer as EmployeeFormContainer };