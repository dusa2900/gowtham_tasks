import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
public loginUser(value:any)
{
  localStorage.setItem('loginDetails',JSON.stringify(value));
}
public getLoginUser()
{
 return localStorage.getItem('loginDetails');
}

public isLoggedIn()
{
  return this.getLoginUser() && localStorage.getItem('Name');
}
public clearLogin()
{
  return localStorage.clear();
}
}
