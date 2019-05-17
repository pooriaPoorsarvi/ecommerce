import { Observable, observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { UserModel } from '../dataModules/User.model';

@Injectable()
export class UserService {


  constructor(public router : Router,
              public route : ActivatedRoute){}


  getUser() : Observable <any>{
    let user = new UserModel("This is a sample user name",
                              "This is a sample user last name",
                              ["pooriapoorsarvi@gmail.com"],
                              []);
    return Observable.create(
      (observer) => {
        observer.next(user);
      }
    );
  }


}


