import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
declare const $:any;
@Component({
  selector: 'app-add-employee-list',
  templateUrl: './add-employee-list.component.html',
  styleUrls: ['./add-employee-list.component.css']
})
export class AddEmployeeListComponent implements OnInit {
employeeList={};
employeeListArr=[];
  constructor(private _router:Router) { }

  ngOnInit() {
    localStorage.removeItem("newEmployee");
  }
  addEmployee(){
console.log("employeeList:",this.employeeList);
this.employeeListArr.push(this.employeeList);
localStorage.setItem("newEmployee",JSON.stringify(this.employeeListArr));
this.employeeList={};


  }
}
