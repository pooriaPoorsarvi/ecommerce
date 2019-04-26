import { SizeService, SizeState } from './../../shared-services/size-compat.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  xsOrSmall : boolean = false;

  @Input() sidenav : MatSidenav;

  constructor(public sizeService : SizeService){}


  ngOnInit() {
    this.sizeService.stateBuffer.subscribe(
      (event : SizeState) => {this.xsOrSmall = event.small ;}
    )
  }

}
