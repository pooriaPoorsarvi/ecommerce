import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button-stroked',
  templateUrl: './shared-button-stroked.component.html',
  styleUrls: ['./shared-button-stroked.component.css']
})
export class SharedButtonStrokedComponent implements OnInit {

  @Input() color : string;
  @Input() width : string = '100%';

  constructor() { }

  ngOnInit() {
  }

}
