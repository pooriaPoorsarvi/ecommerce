import { Subject, Observable, pipe } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import {SERVER_API_URL, login_url} from './brand.service';
@Injectable()
export class AuthServerProvider {
  constructor(private http: HttpClient, private $localStorage: LocalStorageService, private $sessionStorage: SessionStorageService) {}

  getToken() {
    return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
  }

  login(credentials): Observable<any> {
    const data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe
    };
    //
    return this.http.post(login_url(), data).pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(resp) {
      const bearerToken = resp['token'];

      // if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
      const jwt = bearerToken.slice(0, bearerToken.length);
      this.storeAuthenticationToken(jwt, credentials.rememberMe);
      return jwt;
      // }
    }
  }

  loginWithToken(jwt, rememberMe) {
    if (jwt) {
      this.storeAuthenticationToken(jwt, rememberMe);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
    }
  }
  getCurrentUser(){
    var token = this.$localStorage.retrieve('authenticationToken');
    if( token != null){
      this.storeAuthenticationToken(token, true);
      return true;
    }
    return false;
  }
  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
    return new Observable(observer => {
      this.$localStorage.clear('authenticationToken');
      this.$sessionStorage.clear('authenticationToken');
      observer.complete();
    });
  }
}




