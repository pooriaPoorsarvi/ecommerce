import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shared-button-raised',
  templateUrl: './shared-button-raised.component.html',
  styleUrls: ['./shared-button-raised.component.css']
})
export class SharedButtonRaisedComponent implements OnInit {
  @Input() color : string;
  @Input() width : string  = '100%';
  @Input() height : string  =  '100%';
  @Input() matB : any = null;
  @Input() matBc : string = '';
  @Input() matBp : string = '';


  @Input() styleIn : any = {};


  constructor() { }

  ngOnInit() {
  }

}
