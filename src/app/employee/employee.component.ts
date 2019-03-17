import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Directive/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees:any[]=[];
  constructor(private _studentService:StudentService) { }

  ngOnInit() {
    this._studentService.getStudents().subscribe((data)=>{
      console.log("data:",data);
      this.employees=<Array<any>>data;
      
      if(JSON.parse(localStorage.getItem("newEmployee")).length > 0){
        console.log("localstorage");
        
         let employeeItems=JSON.parse(localStorage.getItem("newEmployee"));
       employeeItems.forEach((obj)=>{
        this.employees.push(obj);
       })
        
      }
      
          },(error)=>{
            console.log("error:",error);
          }
        )

      
  }

}
