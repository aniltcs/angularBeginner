import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeComponent} from './employee.component';
import { StudentService } from '../Directive/student.service';
import { RouterModule} from '@angular/router';
import { EmployeeDetailComponent } from './employeeDetail/employeeDetail.component';
import { AddEmployeeListComponent } from './addEmployee/add-employee-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule.forChild([
      {path:"employee",component:EmployeeComponent},
      {path:"employee/:id",component:EmployeeDetailComponent},
      {path:"employee/:id/edit",component:AddEmployeeListComponent}
    ])
  ],
  declarations: [EmployeeComponent,EmployeeDetailComponent
    ,AddEmployeeListComponent],
  providers: [StudentService]
})
export class EmployeeModule { }
