import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../Interface/contact';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public apiUrl:string="http://localhost:3000/contacts/";
  constructor(private http:HttpClient) { }

  getContacts():Observable<IContact>
  {
    return this.http.get<IContact>(this.apiUrl);
  }
  deleteContactByName(value:any):Observable<any>
  {
    return this.http.delete<any>(this.apiUrl+value);
  }
  postContact(data:any):Observable<IContact>
  {
    return this.http.post<IContact>(this.apiUrl,data)
  }
  updateContact(id:number,value:any):Observable<any>
  {
    return this.http.put<any>(this.apiUrl+id,value);
  }
}
