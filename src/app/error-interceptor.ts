import { ErrorComponent } from './shared/layout/error/error.component';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        if (error.error.message) {
          errorMessage = error.error.message;
        }
        // this.dialog.open(ErrorComponent, { data: {message: errorMessage} })
        return throwError(error);
      })
    );
  }
};
