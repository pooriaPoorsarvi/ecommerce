import { DataServerService } from './../../../dataModules/DataServer.service';
import { MenuOptionModel } from './../../../dataModules/MenuOption.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-lap',
  templateUrl: './header-lap.component.html',
  styleUrls: ['./header-lap.component.css']
})
export class HeaderLapComponent implements OnInit {

  menus : MenuOptionModel[];
  hovers : boolean[] = [];

  constructor(public dataServerService : DataServerService) { }

  ngOnInit() {
    this.dataServerService.getMenus().subscribe(
      res => {
        this.menus = res;
        for(var i = 0 ;  i < this.menus.length ; i ++){
          this.hovers.push(false);
        }
      }
    );
  }


}
