import { InvoiceModel } from './../shared-services/invoice.model';
import { Observable, observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { UserModel } from '../dataModules/User.model';
import { DummyInvoiceCreatorService } from '../shared-services/dummy-invoice-creator.service';

@Injectable()
export class UserService {

  viewedInvoice : InvoiceModel ;


  constructor(public router : Router,
              public route : ActivatedRoute){}


  getUser() : Observable <any>{
    let user = new UserModel("This is a sample user name",
                              "This is a sample user last name",
                              "pooriapoorsarvi@gmail.com",
                              []);
    return Observable.create(
      (observer) => {
        observer.next(user);
      }
    );
  }

  get_and_set_viewed_invoice(id : number) : Observable <InvoiceModel>{

    // TODO make sure that you'll update the seen invoice locally to after getting it from the server
    return Observable.create(
      (observer) => {
        DummyInvoiceCreatorService.give().subscribe(
          (res) => {
            this.viewedInvoice = res[0];
            observer.next(this.viewedInvoice);
          }
        );
      }
    );
  }


}


