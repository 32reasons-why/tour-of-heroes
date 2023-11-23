import { Component, OnInit } from '@angular/core';
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
    //console.log( this.router.snapshot.params.id ); 
    //call id
    this.student.getById(this.router.snapshot.params.id).subscribe((result: any)=>{
      console.log(result)
      this.editStudent = new FormGroup({
        name: new FormControl( result['name'] ),
        email: new FormControl( result['email'] )
      });

    });
  }

  //property for alert msg
  message: boolean = false;

  //mmethod for updating data
  updateData(){
      console.log(this.editStudent.value)
      this.student.updateStudentData(this.router.snapshot.params.id, this.editStudent.value).subscribe((result)=>{
        console.log(result)
        this.message = true;
        this.editStudent.reset({});
      });

  }

  //remove message
  removeMsg(){
    this.message = false;
  }
}
