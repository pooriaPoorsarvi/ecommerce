import { ProductServerService } from 'src/app/shared-services/product-server.service';
import { DetailRouterModule } from './detail-router.module';
import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detial-page/detail-page.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';
import { AddToCartComponent } from './detial-page/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    DetailPageComponent,
    DetailComponent,
    AddToCartComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    DetailRouterModule,
  ],
  providers : [ProductServerService]
})
export class DetailModule { }
