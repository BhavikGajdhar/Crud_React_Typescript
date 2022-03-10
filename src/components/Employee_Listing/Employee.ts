
export class Employee {
    public  id!: number;
    public  firstName!: string;
    public  lastName!: string;
    public  username!: string;
    public  email!:string;
    public phone!:string;
}
export interface Props {
    getData: Function;
    actualEmployeeData:[];
    navigate:Function;
    location:{pathname:string};
    nullData:Function ;
    params: {id:string};
    removeId: Function;
    type:String;
    payload:{}
    id:number;
    initialValues:{};
    initialValue:[]
    removeItem:Function
    idByEmployeeData:{}
    getSampleData:Function;
    addSampleData:Function;
    putSampleData:Function;
    employeeDataById:{}
    CreateEmployeeReducer:{idByEmployeeData:{},employeeData:[]}
    update:Function;
    save:Function;
    Values:{}
}