import { InvoiceModel } from '../../dataModules/invoice.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  viewed_invoice : InvoiceModel;
  param : number;

  constructor(public router : Router,
              public route : ActivatedRoute,
              public userService : UserService) { }

  ngOnInit() {
    this.route.snapshot.params['param'];
    this.check_viewed_invoice();
    this.route.params.subscribe(
      (params) => {
        this.param = +params['param'];
        this.check_viewed_invoice();
      }
    );
  }

  check_viewed_invoice(){
    if(!this.userService.viewedInvoice){
      this.userService.get_and_set_viewed_invoice(this.param).subscribe(
        (inv) => {
          this.viewed_invoice = inv;
        }
      );
      return ;
    }

    if(this.param != this.userService.viewedInvoice.id){
      this.userService.get_and_set_viewed_invoice(this.param).subscribe(
        (inv) => {
          this.viewed_invoice = inv;
        }
      );
      return ;
    }
  }

}
