import { UserModel } from 'src/app/dataModules/User.model';
import { BrandService } from './brand.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AddressModel } from '../dataModules/Address.model';

@Injectable()
export class AuthenticationService{

  public current_activated_user : UserModel = null;
  public activated_user_buffer = new Subject<UserModel>();


  is_authenticated() : boolean {
    return this.current_activated_user != null;
  }



  constructor(public httpClient : HttpClient,
              public brandService : BrandService){

    this.current_activated_user = new UserModel('pooria', 'pooriapoorsarvi@gmai.com');
    this.current_activated_user.addresses = [
      new AddressModel("address 1", null, null, null, null, null),
      new AddressModel("address 2", null, null, null, null, null)
    ];

  }
  registerUser(email : string, password : string, name? : string | null,
              lastName? : string | null, sex? : string | null, ){

    var header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', '*');
    header.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    return this.httpClient.put(this.brandService.getRegisterUrl(),{
      'email' : email,
      'password' : password,
      'name' : name,
      'lastName' : lastName,
      'sex' : sex
    },{'headers':header});

  }

}



