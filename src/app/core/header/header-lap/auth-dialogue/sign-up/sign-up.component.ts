import { FormGroup, FormControl, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../../../../shared-services/authentication.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  repeatPassword : string = '';

  form : FormGroup;

  constructor(public authenticationService : AuthenticationService) { }

  ngOnInit() {

    var f = (b : AbstractControl) => {
      return (control: AbstractControl): {[key: string]: any} | null => {
        console.log(control.value, b.value, control.value != b.value);
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
    this.authenticationService.registerUser(this.form.get('email').value, this.form.get('password').value, this.form.get('name').value).subscribe(
      (asd) => {
        console.log(asd);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

}
