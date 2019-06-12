import { AuthenticationService } from './../../../../../shared-services/authentication.service';
import { AuthDialogueComponent } from './../auth-dialogue.component';
import { MatDialogRef } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServerProvider } from '../../../../../shared-services/underly-auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { SpinnerService } from 'src/app/shared-services/spinner.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Input() public dialogRef: MatDialogRef<AuthDialogueComponent>;

  form : FormGroup;



  constructor(public httpClient : HttpClient,
              public authenticationService : AuthenticationService,
              public spinnerService : SpinnerService) { }

  ngOnInit() {

    this.form = new FormGroup({
        "username" :  new FormControl(),
        "password" : new FormControl(),
        "rememberMe" : new FormControl(true),
    });

  }

  login(){
    this.authenticationService.login(this.form.value, this.spinnerService, this.dialogRef);
  }

  signup(){
    // var header = new HttpHeaders();

    // this.httpClient.get(login_url(), {headers : header}).subscribe(
    //   (result) => {
    //     console.log(result);
    //     // TODO add a spinner before closing
    //     this.dialogRef.close();
    //   },
    //   (err) => {
    //     console.log(err);
    //     // TODO add a spinner before closing
    //     this.dialogRef.close();
    //   }
    // );
  }

}
