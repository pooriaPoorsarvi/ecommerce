import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shared-button-raised',
  templateUrl: './shared-button-raised.component.html',
  styleUrls: ['./shared-button-raised.component.css']
})
export class SharedButtonRaisedComponent implements OnInit {
  @Input() color : string;


  constructor() { }

  ngOnInit() {
  }

}
