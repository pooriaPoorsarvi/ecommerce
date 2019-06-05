import { AuthenticationService } from './../../../../../shared-services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  register(){
    this.authenticationService.registerUser("string2a@gmail.com", "Fudg3Fudg3Fudg3Q!").subscribe(
      (asd) => {
        console.log(asd);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

}
