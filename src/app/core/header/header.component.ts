import { SizeService, SizeState } from './../../shared-services/size-compat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  xsOrSmall : boolean = false;

  constructor(public sizeService : SizeService){}


  ngOnInit() {
    this.sizeService.stateBuffer.subscribe(
      (event : SizeState) => {this.xsOrSmall = event.xs  ;}
    )
  }

}
