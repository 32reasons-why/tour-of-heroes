import { Injectable } from '@angular/core';

//To use APIs you need HttpClient
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url  = 'http://localhost:3000/Students';
  //add param for http client
  constructor(private http:HttpClient ) { }

  //method to get all students
  getAllStudents(){

    
    return this.http.get(this.url);

  }
}
