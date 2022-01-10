import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as contacts from '../../../contacts.json';

const PRODUCTS_URL = "http://localhost:3000/contacts/";

@Injectable()
export class MatchInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          console.log('Intercepted request: ' + request.url);
    if (request.url === PRODUCTS_URL) {
          console.log('Loaded from JSON: ' + request.url);
          return of(new HttpResponse({ status: 200, body: ((contacts) as any).default }));
    }
    return next.handle(request);

}
}
