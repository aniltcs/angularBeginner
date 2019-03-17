import { Component, OnInit } from '@angular/core';
import {StudentService} from './student.service';

declare const $:any;
@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
errorMsg:string;
successMsg:string;
errorStatus:boolean;
successStatus:boolean;
employeeStatus:string="actor";
employees:Object;
//   students: any[] = [ {
//     "ID": "1",
//     "firstName" : "Salman",
//     "lastName" :"Khan",
//     "status"   :"actor"
//  },

//  {
//     "ID": "2",
//     "firstName" : "Sharukh",
//     "lastName":"Khan",
//     "status"   :"actor"
//  },
//  {
//   "ID": "3",
//   "firstName" : "Rahul",
//   "lastName":"Sarkar",
//   "status"   :"common"
// },
// {
//   "ID": "4",
//   "firstName" : "Sonu",
//   "lastName":"Swain",
//   "status"   :"common"
// } ];

  constructor(private _studentService:StudentService) { }

  ngOnInit() {
    this._studentService.getStudents().subscribe((data)=>{
console.log("data:",data);
this.employees=data;
this.successStatus=true;
this.successMsg="Data Fetched Successfully";
$('#myModal').modal('show'); 
    },(error)=>{
      console.log("error:",error);
      this.errorMsg="Data Fetching Failed";
      this.errorStatus=true;
      $('#myModal').modal('show'); 
    }
  )
  }
  showDeveloper(){
    this.employeeStatus="Developer";
  }

  showTester(){
    this.employeeStatus="tester";
  }
}
