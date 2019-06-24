import { SpinnerService } from './shared-services/spinner.service';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ProductDummyServer } from './shared-services/product-dummy-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  need_to_spin : boolean = false;

  title = 'ecommerce';
  constructor(public route : ActivatedRoute,
              public productDummyServer : ProductDummyServer,
              public spinnerService : SpinnerService,
              private cdr: ChangeDetectorRef) {}
  ngOnInit(){

    this.need_to_spin = this.spinnerService.in_use_snapp_shot;
    this.spinnerService.in_use_buffer.subscribe(
      (value) => {
        this.need_to_spin = value;
        this.cdr.detectChanges();
      }
    );

  }
}
