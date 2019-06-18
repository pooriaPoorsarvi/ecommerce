import { AuthenticationService } from './../../../../../shared-services/authentication.service';
import { AuthDialogueComponent } from './../auth-dialogue.component';
import { MatDialogRef } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServerProvider } from '../../../../../shared-services/underly-auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { SpinnerService } from 'src/app/shared-services/spinner.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        "username" :  new FormControl(null, [Validators.required]),
        "password" : new FormControl(null, [Validators.required]),
        "rememberMe" : new FormControl(true),
    });

  }

  login(){
    if(!this.form.valid)
    return;
    this.authenticationService.login(this.form.value, this.spinnerService, this.dialogRef);
  }



}
