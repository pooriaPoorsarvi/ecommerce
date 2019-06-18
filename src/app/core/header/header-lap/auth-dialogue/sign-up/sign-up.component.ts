import { SpinnerService } from './../../../../../shared-services/spinner.service';
import { AuthDialogueComponent } from './../auth-dialogue.component';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../../../../shared-services/authentication.service';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {



  @Input() public dialogRef: MatDialogRef<AuthDialogueComponent>;


  repeatPassword : string = '';

  form : FormGroup;

  constructor(public authenticationService : AuthenticationService,
              public spinnerService : SpinnerService) { }

  ngOnInit() {

    var f = (b : AbstractControl) => {
      return (control: AbstractControl): {[key: string]: any} | null => {
        // console.log(control.value, b.value, control.value != b.value);
        const forbidden = control.value != b.value;
        return forbidden ? {'forbiddenName': 'hey'} : null;
      };
    }

    var a = new FormControl(null, {validators : [Validators.required]});
    var b = new FormControl(null, {validators : [f(a), Validators.required]});

    this.form = new FormGroup({
      'name' : new FormControl(null, {validators : [Validators.required]}),
      'email' : new FormControl(null, {validators : [Validators.required, Validators.email]}),
      'password' : a,
      'repeat-password' : b,
    });
    // , {validators : [f]}
  }

  register(){
    if(!this.form.valid)
    return;
    this.authenticationService.registerUser(this.form.get('email').value, this.form.get('password').value,
    this.spinnerService,
    this.dialogRef,
    this.form.get('name').value).subscribe(
      (asd) => {
        console.log(asd);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

}
