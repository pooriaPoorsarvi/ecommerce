import { InvoiceModel } from '../dataModules/invoice.model';
import { ProductDummyServer } from './product-dummy-server.service';
import { ProductModel } from 'src/app/dataModules/Product.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

export class DummyInvoiceCreatorService{
  static give() : Observable<InvoiceModel[]>{
    var temp = ProductDummyServer.give(40);
    var res = [new InvoiceModel(102,temp.slice(0, 10), "This is a sample state"),
               new InvoiceModel(103,temp.slice(20, 30), "This is a sample state"),
               new InvoiceModel(104,temp.slice(30, 40), "This is a sample state"),]
    return Observable.create(
      (observer) => {
        observer.next(res);
      }
    );
  }
}




