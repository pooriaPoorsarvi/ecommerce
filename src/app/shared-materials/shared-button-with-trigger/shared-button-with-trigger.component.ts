import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button-with-trigger',
  templateUrl: './shared-button-with-trigger.component.html',
  styleUrls: ['./shared-button-with-trigger.component.css']
})
export class SharedButtonWithTriggerComponent implements OnInit {
  @Input() color : string;
  @Input() width : string  = '100%';
  @Input() height : string  = '100%';
  @Input() matMenuOpt : any = null;


  constructor() { }

  ngOnInit() {
  }

}
