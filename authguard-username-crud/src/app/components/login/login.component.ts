import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder,private router: Router,private authLogin:AuthService) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
  })
  }
  onSubmit(data:any)
  {
    //console.log(data.user);
    localStorage.setItem('Name',data.user);
    
     this.authLogin.loginUser(data);
     this.router.navigate(['/addEmp'])
  
  }
}
