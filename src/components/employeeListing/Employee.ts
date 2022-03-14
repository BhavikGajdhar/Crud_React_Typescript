export class Employee {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public phone: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    phone: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.phone = phone;
  }
}
export interface ListContainerProps {
  getData: Function;
  actualEmployeeData: [];
  navigate: Function;
  location: { pathname: string };
  nullData: Function;
  removeId: Function;
  params: string | number | Function;
  CreateEmployeeReducer: { employeeData: [] };
}
export interface ListPresentationProps {
  navigate: Function;
  removeItem: Function;
  initialValue: [];
}
export interface FormContainerProps {
  params: { id: string };
  employeeDataById: {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    phone: string
  };
  getSampleData: Function;
  addSampleData: Function;
  putSampleData: Function;
  navigate: Function;
  CreateEmployeeReducer: { idByEmployeeData: {} };
}
export interface FormPresentationProps {
  navigate: Function;
  update: Function;
  save: Function;
  initialValues: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
  };
}
export interface ReducerProps {
  type: String;
  payload: {};
  id: number;
}
