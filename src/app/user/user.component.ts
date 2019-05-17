import { UserService } from './user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [UserService]
})
export class UserComponent implements OnInit {

  id : string;

  constructor(public router : Router,
              public route : ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params["id"];

    this.route.params.subscribe(
      (par : Params) => {
        this.id = par["id"];
      }
    );

  }

}
