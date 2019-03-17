import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from  'rxjs';

@Injectable()
export class StudentService {
url="../../assets/employee.json";

  constructor(private _http:HttpClient) { }

  getStudents(){
   return this._http.get(this.url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
      }
}
