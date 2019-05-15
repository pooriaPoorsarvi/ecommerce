import { AuthDialogueComponent } from './auth-dialogue/auth-dialogue.component';
import { DataServerService } from './../../../dataModules/DataServer.service';
import { MenuOptionModel } from './../../../dataModules/MenuOption.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header-lap',
  templateUrl: './header-lap.component.html',
  styleUrls: ['./header-lap.component.css']
})
export class HeaderLapComponent implements OnInit {

  menus : MenuOptionModel[];
  hovers : boolean[] = [];

  constructor(public dataServerService : DataServerService,
              public dialog : MatDialog) { }



  openDialouge(){
    const dialogRef = this.dialog.open(AuthDialogueComponent, {
      width: '500px',
      data: {login : true}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

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


