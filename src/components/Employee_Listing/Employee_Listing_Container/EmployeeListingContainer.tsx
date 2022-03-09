import { EmployeeListingPresentation } from "./Employee_Listing_Presentation/EmployeeListingPresentation";
import { useEffect } from "react";
import {
  getEmployeeData,
  deleteEmployeeData,
} from "./Middleware/EmployeeMiddleware";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdEmployeeData } from "./Actions/CreateEmployeeAction";
import { Employee } from "../Employee";
import { AnyAction } from "redux";

const EmployeeListingContainer = (props:AnyAction) => {
  useEffect(() => {
    props.getData();
  }, []);

  /**  Remove The By Id Middleware Call */
  const removeItem = (id: number) => {
    props.removeId(id);
  };

  /**  Null data aSign  when the add form  */
  const navigate = () => {
    props.nullData(null);
  };

  return (
    <div>
      <EmployeeListingPresentation
        initialValues={props.actualEmployeeData}
        removeItem={removeItem}
        navigate={navigate}
      />
    </div>
  );
};
const mapStateToProps = (state:AnyAction) => ({
  actualEmployeeData: state.CreateEmployeeReducer.employeeData,
});

const mapDispatchToProps = (dispatch:Function) => ({
  getData: () => dispatch(getEmployeeData()),
  removeId: (id: number) => dispatch(deleteEmployeeData(id)),
  nullData: (data:Employee) => dispatch(getIdEmployeeData(data)),
});

const UserListingFN = (props: AnyAction) => {
  return <EmployeeListingContainer params={useParams()} {...props} />;
};
const employeeListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListingFN);
export { employeeListingContainer as EmployeeListingContainer };
