import { SizeService, SizeState } from './../../../../shared-services/size-compat.service';
import { MenuOptionModel } from './../../../../dataModules/MenuOption.model';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class MenuOptionComponent implements OnInit {

  small : boolean = false ;
  medium : boolean = false ;

  @Input() menu : MenuOptionModel;
  @Input() image : string;
  hovered = false;

  constructor(public sizeService : SizeService) { }

  ngOnInit() {
    this.sizeService.stateBuffer.subscribe(
      (event : SizeState) => {
        this.small = event.small;
        this.medium = event.medium;
      }
    );
  }

}
