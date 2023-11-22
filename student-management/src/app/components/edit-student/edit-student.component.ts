import { Component } from '@angular/core';
//forms
import { FormGroup, FormControl } from '@angular/forms';
//lib
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  constructor(private student:StudentsService){}
  editStudent = new FormGroup({
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
    this.student.saveStudentData(this.editStudent.value).subscribe((result)=>{
      //console.log(result)

      //display alert after submit
      this.message = true;

      //clear place holders
      this.editStudent.reset({});

    });
  }

  //remove message
  removeMsg(){
    this.message = false;
  }
}
