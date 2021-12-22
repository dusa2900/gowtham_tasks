import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = "Sign In";

  constructor(private authservice: AuthService, private router: Router) {

  }

  logout() {
    this.authservice.clearLogin();
    this.router.navigate([''])

  }

  isLoggedIn() {
    this.title = localStorage.getItem('Name');
    return this.authservice.isLoggedIn();
  }
}
