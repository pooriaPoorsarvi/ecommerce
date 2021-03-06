import { BrandService } from './../../../shared-services/brand.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header-hand',
  templateUrl: './header-hand.component.html',
  styleUrls: ['./header-hand.component.css']
})
export class HeaderHandComponent implements OnInit {

  @Input() side_nav : MatSidenav;

  constructor(public brandService : BrandService) { }

  ngOnInit() {
  }

  findType(){
    console.log(this.side_nav.constructor.name)
  }

}
