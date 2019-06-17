import { RoutingService } from './../../../shared-services/routing.service';
import { AuthenticationService } from './../../../shared-services/authentication.service';
import { BootstrapSizeService } from './../../../shared-services/bootstrap-size.service';
import { SizeStateBootstrap } from 'src/app/shared-services/bootstrap-size.service';
import { SizeState } from './../../../shared-services/size-compat.service';
import { BrandService } from './../../../shared-services/brand.service';
import { ShoppingCartService } from './../../../shared-services/shopping-cart.service';
import { AuthDialogueComponent } from './auth-dialogue/auth-dialogue.component';
import { DataServerService } from './../../../dataModules/DataServer.service';
import { MenuOptionModel } from './../../../dataModules/MenuOption.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductModel } from 'src/app/dataModules/Product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-lap',
  templateUrl: './header-lap.component.html',
  styleUrls: ['./header-lap.component.css']
})
export class HeaderLapComponent implements OnInit {


  bs : SizeStateBootstrap;

  menus : MenuOptionModel[];
  hovers : boolean[] = [];
  shoppingCartProducts : ProductModel[];
  imageMenu : string;

  constructor(public dataServerService : DataServerService,
              public dialog : MatDialog,
              public shoppingCartService : ShoppingCartService,
              public brandService : BrandService,
              public bootstrapSizeService : BootstrapSizeService,
              public authenticationService : AuthenticationService,
              public router : Router,
              public routingService : RoutingService) { }



  openDialouge(){
    const dialogRef = this.dialog.open(AuthDialogueComponent, {
      width: '500px',
      data: {login : false}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  accountClick(){
    if(this.authenticationService.is_authenticated()){
      // TODO add a listener for this in the user section
      this.router.navigate(['/user', this.authenticationService.current_activated_user.id]);
    }else{
      this.openDialouge();
    }
  }

  ngOnInit() {

    this.bs = this.bootstrapSizeService.stateSnapshot;
    this.bootstrapSizeService.stateBuffer.subscribe(
      (bs) => {
        this.bs = bs;
      }
    );


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

    this.dataServerService.getPicture().subscribe(
      (url : string) => {
        this.imageMenu = url;
      }
    );


  }


}


