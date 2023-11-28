import { Component, OnInit } from '@angular/core';
//import service
import { StudentsService } from 'src/app/students.service';
//forms
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit{


  public loginForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router , private student:StudentsService) {
    
  }
  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      email:[''],
      name: ['']
    })
    
  }

  login(){
    this.http.get<any>("http://localhost:3000/Students").subscribe(result=>{
      const user = result.find((a:any)=>{
        //return a.name === this.loginForm.value.name && a.email === this.loginForm.value.email;
        /*if(a.name === this.loginForm.value.name && a.email === this.loginForm.value.email){
          alert("login success");
        }else{
          alert("fail")
        }*/
        console.log(this.loginForm.value.email);
        console.log(a.email)
        if(this.loginForm.value.email == a.email && this.loginForm.value.name == a.name){
          alert("Yes")
          this.router.navigate(['list'])
        }else{
          alert("no")
        }
      });
      
    })
  }

}
