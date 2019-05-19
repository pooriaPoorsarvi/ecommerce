import { ShoppingCartService } from './../../../shared-services/shopping-cart.service';
import { AuthDialogueComponent } from './auth-dialogue/auth-dialogue.component';
import { DataServerService } from './../../../dataModules/DataServer.service';
import { MenuOptionModel } from './../../../dataModules/MenuOption.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductModel } from 'src/app/dataModules/Product.model';

@Component({
  selector: 'app-header-lap',
  templateUrl: './header-lap.component.html',
  styleUrls: ['./header-lap.component.css']
})
export class HeaderLapComponent implements OnInit {

  menus : MenuOptionModel[];
  hovers : boolean[] = [];
  shoppingCartProducts : ProductModel[];

  constructor(public dataServerService : DataServerService,
              public dialog : MatDialog,
              public shoppingCartService : ShoppingCartService) { }



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



    this.shoppingCartProducts = this.shoppingCartService.getSnapShot();
    this.shoppingCartService.products_observer.subscribe(
      (products : ProductModel[]) => {
        this.shoppingCartProducts = products;
      }
    );



    // TODO remove hovers
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


