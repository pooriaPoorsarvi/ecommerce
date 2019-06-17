import { MatDialogRef } from '@angular/material';
import { AuthDialogueComponent } from './../core/header/header-lap/auth-dialogue/auth-dialogue.component';
import { AuthServerProvider } from './underly-auth.service';
import { UserModel } from 'src/app/dataModules/User.model';
import { BrandService, user_info_url } from './brand.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject, Observable, pipe } from 'rxjs';
import {map} from 'rxjs/operators';
import { AddressModel } from '../dataModules/Address.model';
import { SpinnerService } from './spinner.service';


@Injectable()
export class AuthenticationService{



  public current_activated_user : UserModel = null;
  public activated_user_buffer = new Subject<UserModel>();


  is_authenticated() : boolean {
    return this.current_activated_user != null;
  }



  constructor(public httpClient : HttpClient,
              public brandService : BrandService,
              public authServerProvider : AuthServerProvider){
    // TODO check the usage of the buffer and also add a spinner for here
    if(this.authServerProvider.getCurrentUser())
    this.getInfo().subscribe(
      (user) => {},
      (err) => {
        var a = this.authServerProvider.logout().subscribe(
          () => {
            a.unsubscribe();
          }
        );
        console.log("initial auto login failed", err);
      }
    );

    // this.current_activated_user = new UserModel('pooria', 'pooriapoorsarvi@gmai.com');
    // this.current_activated_user.addresses = [
    //   new AddressModel("address 1", 'this is an example province', 'this a sample city', 'this is a sample zip',
    //    'this is a sample address', null, 10, 10),
    //    new AddressModel("address 1", 'this is an example province', 'this a sample city', 'this is a sample zip',
    //     'this is a sample address', 105522, 10, 10),
    // ];

  }
  registerUser(email : string, password : string, name? : string | null,
              lastName? : string | null, sex? : string | null, ){

    var header = new HttpHeaders();
    header.append('Origin', '*');
    header.append('Access-Control-Allow-Origin', '*');
    header.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    return this.httpClient.post(this.brandService.getRegisterUrl(),{
      'email' : email,
      'password' : password,
      'name' : name,
      'lastName' : lastName,
      'sex' : sex
    },{'headers':header});

  }


  login(val : {username : string, password:  string, rememberMe : boolean},spinnerService : SpinnerService, dialogRef ? : MatDialogRef<AuthDialogueComponent>){
    var spinner_value = spinnerService.getUniqueKey();
    spinnerService.add(spinner_value);
    this.authServerProvider.login(
      val
    ).subscribe(
      (right)  => {
        this.getInfo().subscribe(
          (right2) => {
            this.closeConnection(spinnerService, spinner_value, dialogRef);
          },
          (err) => {
            console.log("error 2", err);
            this.closeConnection(spinnerService, spinner_value, dialogRef);
          }
        );
        this.closeConnection(spinnerService, spinner_value, dialogRef);

      },
      (err) => {
        console.log("error 1", err);
        this.closeConnection(spinnerService, spinner_value, dialogRef);
      }
    );

  }


  getInfo() : Observable<any>{


    return this.httpClient.get(user_info_url()).pipe(map(
      (user : any) => {
        this.current_activated_user = user as UserModel;
        return user;
      },
    ));

  }

  closeConnection(spinnerService : SpinnerService, key_spinner : string, dialogRef ? : MatDialogRef<AuthDialogueComponent>){
    spinnerService.remove(key_spinner);
    if(dialogRef)
    dialogRef.close();
  }




}






