import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employeeDetail.component.html',
  styleUrls: ['./employeeDetail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
id:number;
employeeDetObj={};
  constructor(private _activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  this._activatedRoute.params.subscribe((params)=>{
     this.id=+params['id'];
     this.getDetail(this.id);
    })
  }

  backStudentList(){
    this.router.navigate(['/employee']);
  }
  getDetail(id:number){
switch(id){
case 16456:
this.employeeDetObj={
  name:"Salman Khan",
  gender:"Male",
  salary:50000
}
break;

case 16452:
this.employeeDetObj={
  name:"Sharukh Khan",
  gender:"Male",
  salary:30000
}
break;

case 16453:
this.employeeDetObj={
  name:"Rahul Sarkar",
  gender:"Male",
  salary:10000
}
break;

case 16454:
this.employeeDetObj={
  name:"Sonu Swain",
  gender:"Male",
  salary:5000
}
break;
}
  }

}
