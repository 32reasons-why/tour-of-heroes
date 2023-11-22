import { Component, OnInit } from '@angular/core';

//forms
import { FormGroup, FormControl } from '@angular/forms';
//lib
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{

  constructor(private student:StudentsService){}

  //property
  addStudent = new FormGroup({
    name: new FormControl( '' ),
    email: new FormControl( '' )
  });

  ngOnInit(): void {
    
  }

  //property for alert msg
  message: boolean = false;
  //mmethod for saving data
  SaveData(){
    //console.log(this.addStudent.value);
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
      //console.log(result)

      //display alert after submit
      this.message = true;

      //clear place holders
      this.addStudent.reset({});

    });
  }

  //remove message
  removeMsg(){
    this.message = false;
  }
}
