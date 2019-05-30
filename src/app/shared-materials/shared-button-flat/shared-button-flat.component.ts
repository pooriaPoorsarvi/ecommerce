import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button-flat',
  templateUrl: './shared-button-flat.component.html',
  styleUrls: ['./shared-button-flat.component.css']
})
export class SharedButtonFlatComponent implements OnInit {

  @Input() color : string;
  @Input() width : string  = '100%';
  @Input() height : string  = '100%';
  @Input() matB : any = null;
  @Input() matBc : string = '';
  @Input() matBp : string = '';


  constructor() { }

  ngOnInit() {
  }

}
