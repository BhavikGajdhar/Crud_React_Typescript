import { NavLink } from 'react-router-dom';
import React, { Component} from "react";
import { Employee } from '../../Employee';
import '../../../../App.css';


const EmployeeListingPresentation=(props:any)=>  {


    return(
        <div className='App' >
          <NavLink to="/add"><button type="button">Add</button></NavLink>
            
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
                    {props.initialValues && props.initialValues.map((user:Employee,i:any)=>{
                    return(
                        <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><NavLink to={`/edit/${user.id}`}><button>Edit</button></NavLink><button className='delete' type="button" onClick={()=>props.removeItem(user.id)}>Delete</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
     
    )
}

export { EmployeeListingPresentation as EmployeeListingPresentation };