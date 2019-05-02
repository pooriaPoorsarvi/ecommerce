import { SizeService, SizeState } from './../../shared-services/size-compat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  xsOrSmall : boolean = false;

  constructor(public sizeService : SizeService){}


  ngOnInit() {
    this.xsOrSmall  = this.sizeService.stateSnapshot.small;
    this.sizeService.stateBuffer.subscribe(
      (event : SizeState) => {this.xsOrSmall = event.small ;}
    )
  }
}
