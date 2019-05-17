import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  @ViewChild("rld") a;

  constructor(public router : Router) { }

  ngOnInit() {
    // console.log(this.a, this.a.isActive);
  }

}
