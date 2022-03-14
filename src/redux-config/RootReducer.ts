import { combineReducers } from 'redux';
import  {CreateEmployeeReducer} from "../components/employeeListing/employeeListingContainer/Reducer/EmployeeReducer"
// import {CreateUserReducer} from "../components/User_Listing/User_Listing_Container/Reducer/UserReducer"
/** Here combine both reducers where one is came from commons */
const combineReducer = {CreateEmployeeReducer};
export const rootReducer = combineReducers(combineReducer);