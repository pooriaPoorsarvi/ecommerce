import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.css']
})
export class SharedButtonComponent implements OnInit {

  @Input() color : string;
  @Input() width : string  = '100%';
  @Input() height : string  = '100%';
  @Input() matMenuOpt : any = null;


  constructor() { }

  ngOnInit() {
  }

}
