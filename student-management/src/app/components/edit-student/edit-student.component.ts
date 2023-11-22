import { Component } from '@angular/core';
//forms
import { FormGroup, FormControl } from '@angular/forms';
//lib
import { StudentsService } from 'src/app/students.service';
//rout
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  constructor(private student:StudentsService, private router:ActivatedRoute){}


  editStudent = new FormGroup({
    name: new FormControl( '' ),
    email: new FormControl( '' )
  });

  ngOnInit(): void {
    console.log( this.router.snapshot.params) 
  }

  //property for alert msg
  message: boolean = false;
  //mmethod for saving data
  updateData(){
    
  }

  //remove message
  removeMsg(){
    this.message = false;
  }
}
