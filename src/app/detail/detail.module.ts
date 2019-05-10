import { ProductServerService } from 'src/app/shared-services/product-server.service';
import { DetailRouterModule } from './detail-router.module';
import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detial-page/detail-page.component';
import { DetailPageLapComponent } from './detial-page/detail-page-lap/detail-page-lap.component';
import { SharedMaterialsModule } from '../shared-materials/shared-materials.module';
import { ProductMainCardComponent } from './detial-page/detail-page-lap/product-main-card/product-main-card.component';
import { AddToCartComponent } from './detial-page/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [DetailPageComponent, DetailComponent, DetailPageLapComponent, ProductMainCardComponent, AddToCartComponent],
  imports: [
    CommonModule,
    SharedMaterialsModule,
    DetailRouterModule,
  ],
  providers : [ProductServerService]
})
export class DetailModule { }
