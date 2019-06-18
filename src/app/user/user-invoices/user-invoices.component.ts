import { InvoiceModel } from '../../dataModules/invoice.model';
import { Component, OnInit } from '@angular/core';
import { DummyInvoiceCreatorService } from 'src/app/shared-services/dummy-invoice-creator.service';
import {trigger, state, transition, style, animate} from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-user-invoices',
  templateUrl: './user-invoices.component.html',
  styleUrls: ['./user-invoices.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class UserInvoicesComponent implements OnInit {

  displayedColumns: string[] = ['number_of_products', 'state', 'total_price'];
  dataSource : InvoiceModel[];
  expandedElement : InvoiceModel;


  invoices : InvoiceModel[];

  constructor(public router : Router,
              public route : ActivatedRoute) { }

  ngOnInit() {



    DummyInvoiceCreatorService.give().subscribe(
      (invoices) => {
        this.invoices = invoices;
        this.dataSource = invoices;
      }
    );
  }


  go_to_invoice(activatedElement : InvoiceModel){
    this.router.navigate(['./invoice', activatedElement.id], {relativeTo : this.route});
  }


}
