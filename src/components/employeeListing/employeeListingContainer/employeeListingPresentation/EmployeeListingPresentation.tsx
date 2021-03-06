import { NavLink } from "react-router-dom";
import { Employee, ListPresentationProps } from "../../Employee";
import "../../../../App.css";


const EmployeeListingPresentation = (props:ListPresentationProps) => {

  /** Go Back Navigation of Current Page */
  const navigateBack = () => {
    props.navigate();
  };

  return (
    <div className="App">
      <NavLink to="/add">
        <button type="button" onClick={() => navigateBack()}>
          Add
        </button>
      </NavLink>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.initialValue &&
            props.initialValue.map((user:Employee, i:number) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <NavLink to={`/edit/${user.id}`}>
                      <button>Edit</button>
                    </NavLink>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => props.removeItem(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export { EmployeeListingPresentation as EmployeeListingPresentation };
