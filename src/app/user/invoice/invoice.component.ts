import { InvoiceModel } from './../../shared-services/invoice.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  viewed_invoice : InvoiceModel;
  id : string;

  constructor(public userService : UserService,
              public route : Route,
              public router : ActivatedRoute) { }

  ngOnInit() {
    this.router.snapshot.params['id'];
    this.check_viewed_invoice();
    this.router.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.check_viewed_invoice();
      }
    );
  }

  check_viewed_invoice(){

  }

}
