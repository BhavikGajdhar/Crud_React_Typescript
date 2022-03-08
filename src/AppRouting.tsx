import { lazy } from "react";
import { BrowserRouter, Route, Routes,
  useLocation,
  useNavigate } from "react-router-dom";
// import { EmployeeFormContainer } from "./components/Employee_Form/Employee_Form_Container/EmployeeFormContainer";
// import { EmployeeListingContainer } from "./components/Employee_Listing/Employee_Listing_Container/EmployeeListingContainer";
// import { Header } from "./components/Header/Header";

const HeaderComponent = lazy(() => import('./components/Header/Header').
    then(({ Header }) => ({ default: Header })));
const EmployeeListComponent = lazy(() => import('./components/Employee_Listing/Employee_Listing_Container/EmployeeListingContainer').
    then(({ EmployeeListingContainer }) => ({ default: EmployeeListingContainer })));

const EmployeeFormComponent = lazy(() => import('./components/Employee_Form/Employee_Form_Container/EmployeeFormContainer').
    then(({ EmployeeFormContainer }) => ({ default: EmployeeFormContainer })));

const AppRouting = (props: any) => {
  let navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route  path="/" element={<HeaderComponent/>} />
          <Route  path="/EmployeeList" element={<EmployeeListComponent navigate={navigate} location={location}/>} />
          <Route  path="/add" element={<EmployeeFormComponent navigate={navigate} location={location}/>} />
          <Route  path="/edit/:id" element={<EmployeeFormComponent navigate={navigate} location={location}/>} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};
export default AppRouting;
