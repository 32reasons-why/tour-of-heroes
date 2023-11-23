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

  //method to save data
  saveStudentData( data:any ){
    console.log(data)

    return this.http.post(this.url, data);
  }
  //method to delete data
  deleteStudent(id: any){
    console.log(id)

    return this.http.delete(`${this.url}/${id}`);
  }

  //method to get student by id
  getById(id: any){

    return this.http.get(`${this.url}/${id}`)
  }

  updateStudentData(id: any, data: any ){
    return this.http.put(`${this.url}/${id}`, data)
  }
}

