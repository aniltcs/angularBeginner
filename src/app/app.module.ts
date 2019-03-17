import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { DirectiveDemoComponent } from './Directive/directive-demo.component';
import { StudentService } from './Directive/student.service';



import { EmployeeModule } from './employee/employee.module';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './Home/home.component';

import { ParentComponent } from './communication/parentToChild/parent.component';
import { ChildComponent } from './communication/parentToChild/child.component';
import { SiblingComponent } from './communication/parentToChild/sibling.component';
import { DataService } from './communication/parentToChild/data.service';








@NgModule({
  declarations: [
    AppComponent,
    DirectiveDemoComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([
      {path:"home" , component:HomeComponent},
      {path:'',redirectTo:"home",pathMatch:"full"}
    ])
    ,EmployeeModule
  ],
  providers: [StudentService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
