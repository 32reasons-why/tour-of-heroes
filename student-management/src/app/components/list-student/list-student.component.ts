import { Component, OnInit } from '@angular/core';

//call students service where we "GOT"
//import components standard
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})

//implement interface
export class ListStudentComponent implements OnInit{


  constructor(private student:StudentsService){};

  //create property to be called (same as array list)
  studentData: any = [];

  ngOnInit(): void {
    //call method and test via console
    this.student.getAllStudents().subscribe((allData)=>{
      console.log(allData)
      //assign to property
      this.studentData = allData;
    });
  }

}
