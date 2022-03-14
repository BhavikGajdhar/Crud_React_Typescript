import { lazy } from "react";
import { Routes,Route,
  useLocation,
  useNavigate } from "react-router-dom";

const HeaderComponent = lazy(() => import('./components/header/Header').
    then(({ Header }) => ({ default: Header })));
const EmployeeListComponent = lazy(() => import('./components/employeeListing/employeeListingContainer/EmployeeListingContainer').
    then(({ EmployeeListingContainer }) => ({ default: EmployeeListingContainer })));

const EmployeeFormComponent = lazy(() => import('./components/employeeForm/employeeFormContainer/EmployeeFormContainer').
    then(({ EmployeeFormContainer }) => ({ default: EmployeeFormContainer })));

const AppRouting = (props:any) => {
  let navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
        <Routes>
          <Route  path="/" element={<HeaderComponent/>} />
          <Route  path="/EmployeeList" element={<EmployeeListComponent navigate={navigate} location={location}/>} />
          <Route  path="/add" element={<EmployeeFormComponent navigate={navigate} location={location}/>} />
          <Route  path="/edit/:id" element={<EmployeeFormComponent navigate={navigate} location={location}/>} />
        </Routes>
    </div>
  );
};
export default AppRouting;
