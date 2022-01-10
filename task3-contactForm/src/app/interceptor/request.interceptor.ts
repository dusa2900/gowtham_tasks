import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((err:HttpErrorResponse) => {
        let errMsg="";
        if(err.error instanceof ErrorEvent)
        {
          let mes="this is Client side error";
          console.log("this is Client side error");
          errMsg = `${mes} +${err.error.message}`;
        }else {
          let mes1 = "this is server side error";
          console.log("this is server side error");
          errMsg = `${mes1},Error Code: ${err.status},  Message: ${err.message}`;
        }
        alert(errMsg);
        return throwError(errMsg);
      })
    )
  }
}
