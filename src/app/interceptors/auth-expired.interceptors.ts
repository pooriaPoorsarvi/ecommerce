import { AuthServerProvider } from '../shared-services/underly-auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private authServerProvider: AuthServerProvider) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log("Shiiiiiiiit")
              this.authServerProvider.logout();
            }
          }
        }
      )
    );
  }
}
