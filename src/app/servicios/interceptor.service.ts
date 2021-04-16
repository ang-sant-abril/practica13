import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request;
    if(localStorage.getItem('fakeToken') !== null) {
      request = req.clone({
        setHeaders: {authorization: localStorage.getItem('fakeToken')}
      })
    } else {
      request = req.clone({
        setHeaders: {authorization: 'login'}
      })
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 401) {
          this.router.navigate(['/'])
        }
        return throwError(err)
      })
    )
  }

}
