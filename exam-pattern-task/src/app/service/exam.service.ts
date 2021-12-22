import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../interface/question';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  public api:string="http://localhost:3000/Questions";
  public api1:string="http://localhost:3000/answers/"
  public noOfQuestions: number = 0;
  constructor(private _htt:HttpClient) { }
getNoofQuestions():Observable<Question[]>
{
 return this._htt.get<Question[]>(this.api);
}

getQuestions(questionNo: number): Observable<Question[]> {
  return this._htt.get<Question[]>(this.api + `?id=${questionNo}`)
}

postResult(answers:any):Observable<any> {
  return this._htt.post<any>(this.api1,{"myAnswers": answers});
}

getCorrectAnswers():Observable<any> {
  return this._htt.get<any>("http://localhost:3000/correctAnswers")
}

getResultById(id:number):Observable<any> {
  return this._htt.get<any>(this.api1+id)
}

}
