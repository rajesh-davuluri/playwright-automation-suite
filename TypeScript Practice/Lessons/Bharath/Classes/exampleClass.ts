//Class example

class Employee
{ //starting body of the class
    //property
    eid:number;
    ename:string;
    eemail:string;

    constructor(id:number, name:string, email:string)  //constructor 
    {
        this.eid=id;
        this.ename=name;
        this.eemail= email;
    }



}// ending/close body of the class

let empdetails = new Employee(202, "rajesh", "raj@test.com");
//Approach 1
console.log(empdetails.eid)
console.log(empdetails.ename)
//Approach 2
console.log(empdetails['eid'])

